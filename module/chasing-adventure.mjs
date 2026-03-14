import { configSheet } from "./helper/config-sheet.mjs";

Hooks.once('init', () => {
  // Define custom PbtA tags for Chasing Adventure
  game.pbta.tagConfigOverride = {
    actor: {
      all: '[]',
      character: '[]',
      npc: '[{"value":"Group"},{"value":"Horde"}]'
    },
    item: {
      all: '[]',
      weapon: '['
        + '{"value":"Intimate", "description":"Useful when close enough to whisper in your ear"},'
        + '{"value":"Close", "description":"Useful within a few feet, close enough to read expressions"},'
        + '{"value":"Near", "description":"Useful within speaking distance"},'
        + '{"value":"Far", "description":"Useful within clear sight or yelling distance"},'
        + '{"value":"Area", "description":"Hits or affects everything in an area"},'
        + '{"value":"Awkward", "description":"Unwieldy and difficult to use properly"},'
        + '{"value":"Clumsy", "description":"Disadvantage on DEX rolls while using it"},'
        + '{"value":"Dangerous", "description":"Very unsafe; take precautions or face consequences"},'
        + '{"value":"Distinctive", "description":"Obvious and unique sound, appearance, or impression"},'
        + '{"value":"Fiery", "description":"Burns, sears, and causes things to catch fire"},'
        + '{"value":"Forceful", "description":"Powerful crushing blows that knock targets back"},'
        + '{"value":"Heavy", "description":"Requires two hands to wield properly"},'
        + '{"value":"Infinite", "description":"Too many to count; throw one away and have another"},'
        + '{"value":"Messy", "description":"Particularly destructive, tears people and things apart"},'
        + '{"value":"Piercing", "description":"Ignores Armor"},'
        + '{"value":"Reload", "description":"Takes time to reload or recharge between uses"},'
        + '{"value":"Slow", "description":"Takes a while to use, at least a minute or more"},'
        + '{"value":"Unbreakable", "description":"Cannot be broken or destroyed by normal means"},'
        + '{"value":"Valuable", "description":"Worth 1 Wealth to the right person"},'
        + '{"value":"Vicious", "description":"Harms foes in an especially painful or cruel way"},'
        + '{"value":"0 Wealth"},'
        + '{"value":"1 Wealth"},'
        + '{"value":"2 Wealth"},'
        + '{"value":"3 Wealth"}'
        + ']',
      armor: '['
        + '{"value":"1 Armor", "description":"Provides 1 Armor"},'
        + '{"value":"2 Armor", "description":"Provides 2 Armor"},'
        + '{"value":"+1 Armor", "description":"Adds 1 Armor to existing Armor"},'
        + '{"value":"Clumsy", "description":"Disadvantage on DEX rolls while wearing"},'
        + '{"value":"1 Wealth"},'
        + '{"value":"2 Wealth"},'
        + '{"value":"3 Wealth"}'
        + ']',
      equipment: '['
        + '{"value":"Uses", "description":"The number of times you can use this item"},'
        + '{"value":"Slow", "description":"Takes a while to use, at least a minute or more"},'
        + '{"value":"Dangerous", "description":"Very unsafe; take precautions or face consequences"},'
        + '{"value":"Valuable", "description":"Worth 1 Wealth to the right person"},'
        + '{"value":"1 Wealth"},'
        + '{"value":"2 Wealth"},'
        + '{"value":"3 Wealth"}'
        + ']'
    }
  };
});

Hooks.once('pbtaSheetConfig', () => {
  // Disable the sheet config form
  game.settings.set('pbta', 'sheetConfigOverride', true);

  // Load the Chasing Adventure sheet config
  configSheet();
});

Hooks.once('ready', async () => {
  // Override RollPbtA.configureModifiers to cancel advantage + disadvantage
  const RollPbtA = CONFIG.Dice.RollPbtA;
  if (RollPbtA) {
    const originalConfigureModifiers = RollPbtA.prototype.configureModifiers;
    RollPbtA.prototype.configureModifiers = function () {
      // Resolve which stat is being rolled
      const { stat: statOption, rollType } = this.options;
      let stat = rollType;
      if (typeof statOption === 'object' && statOption?.key) stat = statOption.key;
      else if (typeof statOption === 'string') stat = statOption;

      if (this.hasAdvantage && this.hasDisadvantage) {
        // Both advantage and disadvantage — cancel both out to a normal 2d6 roll.
        // Temporarily clear rollMode and stat toggle so the original method sees neither.
        const savedRollMode = this.options.rollMode;
        this.options.rollMode = 'def';

        let savedToggle;
        if (stat && this.data.stats[stat]) {
          savedToggle = this.data.stats[stat].toggle;
          this.data.stats[stat].toggle = false;
        }

        originalConfigureModifiers.call(this);

        // Restore original values
        this.options.rollMode = savedRollMode;
        if (stat && this.data.stats[stat] && savedToggle !== undefined) {
          this.data.stats[stat].toggle = savedToggle;
        }
      } else {
        originalConfigureModifiers.call(this);
      }

      // If the stat has a condition marked (toggle active), remind to gain XP
      if (stat && this.data.stats[stat]?.toggle) {
        if (!this.options.conditions) this.options.conditions = [];
        this.options.conditions.push('Gain 1 XP (conditioned stat)');
      }
    };
    console.log('Chasing Adventure | Advantage/disadvantage cancellation enabled');
  }

  // Highlight XP reminders in chat cards
  Hooks.on('renderChatMessageHTML', (message, html) => {
    html.querySelectorAll('.conditions li').forEach(li => {
      if (li.textContent.includes('Gain 1 XP')) {
        li.classList.add('xp-reminder');
      }
    });
  });

  // Migrate XP from old Xp type (steps/max fields) to Number type
  const characters = game.actors.filter(a => a.type === 'character');
  for (const actor of characters) {
    const xp = actor.system?.attributes?.xp;
    if (xp && ('steps' in xp || xp.type === 'Xp')) {
      const value = xp.value ?? 0;
      await actor.update({
        'system.attributes.xp': {
          type: 'Number',
          value,
          '-=steps': null,
          '-=max': null
        }
      });
      console.log(`Chasing Adventure | Migrated XP for ${actor.name} (value: ${value})`);
    }
  }
});
