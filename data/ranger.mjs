export const rangerMoves = [
  // === Starting Moves ===
  {
    name: "Bestiary Knowledge",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you first encounter a beast or monster you are familiar with (your call), you may ask the GM one question about it, and they'll tell you the truth.",
    results: {}
  },
  {
    name: "Citizen of the Wild",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you Track Down, roll+WIS instead of +nothing, and make one fewer choice on any result.",
    results: {}
  },
  {
    name: "Ready For Anything",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Starting Move.</strong> You have 4 Prep. When you Settle In, reset your Prep to 4. You can spend Prep to use a Flashback or Honed Technique.",
    results: {}
  },
  {
    name: "Flashback",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you retroactively declare how you prepared for something in advance, spend Prep as determined by the GM using the guideline below. As a consequence during a flashback the GM may say something costs extra Prep. If you spend more Prep than you have, take a condition for each remaining Prep.<br><br>• 1 Prep - Ordinary action, easy opportunity, no rolls required, a short time ago.<br>• 2 Prep - Complex action, unlikely opportunity, one roll required, some time ago.<br>• 3 Prep - Elaborate action, special opportunity, several rolls required, a long time ago.",
    results: {}
  },
  {
    name: "Honed Techniques",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Starting Move.</strong> You have learned many skills from your time in the wilderness. You may spend 1 Prep to use a known Technique at any time without rolling. Choose two Techniques that you know:<br><br>• Avoid: Roll with Advantage when Defying a physical threat.<br>• Exploit: Make an attack Pierce Armor.<br>• Impart: Message or signal someone nearby, covertly or openly.<br>• Maneuver: Rapidly move somewhere nearby, overcoming any natural obstacle or environment in the way.<br>• Snare: Trap someone or something in place for a short time (you may spend your Trap Kit instead of Prep to use this technique).<br>• Trick: Manipulate someone nearby to move somewhere specific.<br>• Vanish: Disappear within a nearby dense or obscuring environment.<br><br>When you Level Up, you may choose to learn an additional Technique instead of another benefit.",
    results: {}
  },
  // === Advanced Moves ===
  {
    name: "Animal Whisperer",
    moveType: "class",
    playbook: "Ranger",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you approach a dangerous animal carefully and peacefully, roll+WIS.",
    results: {
      success: "It will not attack unless provoked.",
      partial: "You must first offer it something it wants (food, territory, etc.).",
      failure: ""
    }
  },
  {
    name: "Athelas",
    moveType: "class",
    playbook: "Ranger",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you forage for medicine and treat someone with it, roll+WIS.",
    results: {
      success: "You find just what you need - heal them of 1 Condition (Slow) as if you used Supplies.",
      partial: "You find something that will do for now - they are able to ignore 1 condition for the scene.",
      failure: ""
    }
  },
  {
    name: "Backup Plans",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Your Prep resets to 6 instead of 4.",
    results: {}
  },
  {
    name: "Big Game Hunter",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> There is always some creature or monster nearby that needs to be dealt with. Whenever you like, tell the GM there is a monster in the region. Then answer three of the questions below, and the GM will answer the remaining three questions in secret:<br><br>• How big is it?<br>• How many are there?<br>• Where is its lair?<br>• What are its defenses?<br>• What can it do?<br>• What valuables might it have?<br><br>When you show authorities proof that the threat is dealt with, gain 3 Wealth.",
    results: {}
  },
  {
    name: "Camouflaged",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have Advantage to Gain the Edge in the wilderness. When you move slowly, carefully, and calmly, you make no noise and leave no trace of your passage.",
    results: {}
  },
  {
    name: "Favored Quarry",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you declare a specific type of creature to be your Favored Quarry (goblins, mages, ghosts, etc.), say how their kind wronged you and what you plan to do in return. Until you achieve it in full you cannot declare another Favored Quarry. Your Favored Quarry takes an extra condition from all of your attacks, can never surprise you, and is always treated as a dangerous monster to you.",
    results: {}
  },
  {
    name: "Knowledge is Power",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Ponder or Examine a monster or wild creature, on a 10+ gain 1 Prep.",
    results: {}
  },
  {
    name: "Mastermind",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> At the start of a Flashback, you may spend 1 additional Prep to gain Advantage on all rolls made during that flashback.",
    results: {}
  },
  {
    name: "One Shot, One Kill",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you ambush your foe with an attack, if the GM thinks you can't miss, then treat your first roll as a 12+ no matter the result. If you can miss, then treat a 6- as a 7-9, a 7-9 as a 10+, or a 10+ as a 12+.",
    results: {}
  },
  {
    name: "Prepared For Battle",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you enter a battle, gain 1 Prep.",
    results: {}
  },
  {
    name: "Scholar of the Wilds",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Ponder creatures, monsters or the wild, you may roll either +WIS or +INT. When you Examine a situation in the wilderness, you may roll either +INT or +WIS.",
    results: {}
  },
  {
    name: "Scout Ahead",
    moveType: "class",
    playbook: "Ranger",
    rollType: "dex",
    description: "<strong>Advanced Move.</strong> When you go off on your own to explore a dangerous area, roll+DEX. On a 7 or higher you make it back safely; the GM will describe what you encountered.",
    results: {
      success: "Choose two:<br>• Ask the GM one question as if you rolled a 7-9 to Examine the area you explored (you can choose this multiple times).<br>• Bring something interesting or useful back, the GM will say what.<br>• You made preparations while there, gain 1 Prep.",
      partial: "Choose one from the list.",
      failure: "Choose one from the list, in addition to whatever the GM says."
    }
  },
  {
    name: "Spotter",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Cooperate with someone, if you would suffer costs or consequences from doing so you can spend 1 Prep to avoid them.",
    results: {}
  },
  {
    name: "Tackle Box",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you search your things for an item to help with a monster or wild creature, if it's relatively cheap (1 Wealth) and common, you have it. If it's expensive, rare, or unique, you may spend 2 Prep to have it.",
    results: {}
  },
  {
    name: "Trap Master",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you set up a Trap Kit into a trap, you and your allies can maneuver within and around it without any danger. Additionally, gain Advantage against any target while it is caught in a trap that you set.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Ready for Everything",
    moveType: "class",
    playbook: "Ranger",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> When you use a Honed Technique, you may spend 2 Prep instead of 1 to increase the effect in the following ways:<br><br>• Avoid: Roll with Advantage to Defy anything.<br>• Exploit: Make an attack Pierce Armor and deal an extra condition.<br>• Impart: Message or signal someone anywhere, covertly or openly, and know their response.<br>• Maneuver: Rapidly move somewhere nearby, overcoming any number of enemies, obstacles, or environments in the way.<br>• Snare: Trap someone or something in place until you release them (you may spend your Trap Kit plus 1 Prep to use this technique).<br>• Trick: Manipulate someone nearby to act precisely how you wish.<br>• Vanish: Disappear within any environment.",
    results: {}
  }
];
