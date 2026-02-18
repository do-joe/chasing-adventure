export const configSheet = async () => {
  const i18n = (key) => game.i18n.localize(key);

  game.pbta.sheetConfig = {
    rollFormula: "2d6",
    minMod: -3,
    maxMod: 4,
    statToggle: {
      label: i18n("ca.statToggle.label"),
      modifier: "dis"
    },
    rollResults: {
      success: {
        start: 10,
        end: null,
        label: i18n("ca.rollResults.success")
      },
      partial: {
        start: 7,
        end: 9,
        label: i18n("ca.rollResults.partial")
      },
      failure: {
        start: null,
        end: 6,
        label: i18n("ca.rollResults.failure")
      }
    },
    actorTypes: {
      character: {
        stats: {
          str: {
            label: i18n("ca.character.stats.str"),
            value: 0
          },
          dex: {
            label: i18n("ca.character.stats.dex"),
            value: 0
          },
          int: {
            label: i18n("ca.character.stats.int"),
            value: 0
          },
          wis: {
            label: i18n("ca.character.stats.wis"),
            value: 0
          },
          cha: {
            label: i18n("ca.character.stats.cha"),
            value: 0
          }
        },
        // Top attributes — XP, Level, Armor, Wealth
        attributes: {
          xp: {
            label: i18n("ca.character.attrTop.xp.label"),
            description: i18n("ca.character.attrTop.xp.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Xp",
            value: 0,
            max: 5,
            steps: [false, false, false, false, false]
          },
          level: {
            label: i18n("ca.character.attrTop.level.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Number",
            value: 1
          },
          armor: {
            label: i18n("ca.character.attrTop.armor.label"),
            description: i18n("ca.character.attrTop.armor.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Number",
            value: 0
          },
          wealth: {
            label: i18n("ca.character.attrTop.wealth.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Number",
            value: 0
          }
        },
        // Left attributes — conditions, drive, look, favor, background, playbook-specific
        attrLeft: {
          // Conditions — ListMany tracking individual conditions by stat
          conditions: {
            label: i18n("ca.character.attrLeft.conditions.label"),
            description: i18n("ca.character.attrLeft.conditions.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "ListMany",
            condition: false,
            options: {
              "0": {
                label: i18n("ca.character.attrLeft.conditions.options.weakened"),
                value: false
              },
              "1": {
                label: i18n("ca.character.attrLeft.conditions.options.nauseous"),
                value: false
              },
              "2": {
                label: i18n("ca.character.attrLeft.conditions.options.dizzy"),
                value: false
              },
              "3": {
                label: i18n("ca.character.attrLeft.conditions.options.shaky"),
                value: false
              },
              "4": {
                label: i18n("ca.character.attrLeft.conditions.options.stunned"),
                value: false
              },
              "5": {
                label: i18n("ca.character.attrLeft.conditions.options.dazed"),
                value: false
              },
              "6": {
                label: i18n("ca.character.attrLeft.conditions.options.forgetful"),
                value: false
              },
              "7": {
                label: i18n("ca.character.attrLeft.conditions.options.confused"),
                value: false
              },
              "8": {
                label: i18n("ca.character.attrLeft.conditions.options.exhausted"),
                value: false
              },
              "9": {
                label: i18n("ca.character.attrLeft.conditions.options.scarred"),
                value: false
              },
              "10": {
                label: i18n("ca.character.attrLeft.conditions.options.grumpy"),
                value: false
              }
            }
          },
          drive: {
            label: i18n("ca.character.attrLeft.drive.label"),
            description: i18n("ca.character.attrLeft.drive.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          look: {
            label: i18n("ca.character.attrLeft.look.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          favor: {
            label: i18n("ca.character.attrLeft.favor.label"),
            description: i18n("ca.character.attrLeft.favor.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          background: {
            label: i18n("ca.character.attrLeft.background.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          // Playbook-specific attributes
          appetites: {
            label: i18n("ca.character.attrLeft.appetites.label"),
            description: i18n("ca.character.attrLeft.appetites.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Barbarian",
            value: ""
          },
          art: {
            label: i18n("ca.character.attrLeft.art.label"),
            description: i18n("ca.character.attrLeft.art.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "Resource",
            playbook: "Bard",
            value: 3,
            max: 3
          },
          expressions: {
            label: i18n("ca.character.attrLeft.expressions.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Bard",
            value: ""
          },
          spirit: {
            label: i18n("ca.character.attrLeft.spirit.label"),
            description: i18n("ca.character.attrLeft.spirit.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "Resource",
            playbook: "Cleric",
            value: 2,
            max: 2
          },
          deity: {
            label: i18n("ca.character.attrLeft.deity.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Cleric",
            value: ""
          },
          attuned: {
            label: i18n("ca.character.attrLeft.attuned.label"),
            description: i18n("ca.character.attrLeft.attuned.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Druid",
            value: ""
          },
          momentum: {
            label: i18n("ca.character.attrLeft.momentum.label"),
            description: i18n("ca.character.attrLeft.momentum.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "Resource",
            playbook: "Fighter",
            value: 0,
            max: 5
          },
          firebrand: {
            label: i18n("ca.character.attrLeft.firebrand.label"),
            description: i18n("ca.character.attrLeft.firebrand.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Immolator",
            value: ""
          },
          virtues: {
            label: i18n("ca.character.attrLeft.virtues.label"),
            description: i18n("ca.character.attrLeft.virtues.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Paladin",
            value: ""
          },
          prep: {
            label: i18n("ca.character.attrLeft.prep.label"),
            description: i18n("ca.character.attrLeft.prep.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "Resource",
            playbook: "Ranger",
            value: 0,
            max: 4
          },
          techniques: {
            label: i18n("ca.character.attrLeft.techniques.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Ranger",
            value: ""
          },
          heat: {
            label: i18n("ca.character.attrLeft.heat.label"),
            description: i18n("ca.character.attrLeft.heat.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "Resource",
            playbook: "Thief",
            value: 0,
            max: 4
          },
          spellstat: {
            label: i18n("ca.character.attrLeft.spellstat.label"),
            description: i18n("ca.character.attrLeft.spellstat.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Wizard",
            value: ""
          }
        },
        moveTypes: {
          adventure: {
            label: i18n("ca.character.moveTypes.adventure.label"),
            moves: [],
            creation: true
          },
          peripheral: {
            label: i18n("ca.character.moveTypes.peripheral.label"),
            moves: [],
            creation: true
          },
          chase: {
            label: i18n("ca.character.moveTypes.chase.label"),
            moves: []
          },
          favor: {
            label: i18n("ca.character.moveTypes.favor.label"),
            moves: []
          },
          follower: {
            label: i18n("ca.character.moveTypes.follower.label"),
            moves: []
          },
          class: {
            label: i18n("ca.character.moveTypes.class.label"),
            moves: [],
            playbook: true
          }
        },
        equipmentTypes: {
          gear: {
            label: i18n("ca.character.equipmentTypes.gear.label"),
            moves: []
          },
          weapon: {
            label: i18n("ca.character.equipmentTypes.weapon.label"),
            moves: []
          },
          armor: {
            label: i18n("ca.character.equipmentTypes.armor.label"),
            moves: []
          }
        }
      },
      npc: {
        attributes: {
          conditions: {
            label: i18n("ca.npc.attrTop.conditions.label"),
            description: i18n("ca.npc.attrTop.conditions.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Resource",
            value: 0,
            max: 3
          },
          armor: {
            label: i18n("ca.npc.attrTop.armor.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Number",
            value: 0
          },
          npctype: {
            label: i18n("ca.npc.attrTop.npctype.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "ListMany",
            condition: false,
            options: {
              "0": {
                label: i18n("ca.npc.attrTop.npctype.options.group"),
                value: false
              },
              "1": {
                label: i18n("ca.npc.attrTop.npctype.options.horde"),
                value: false
              },
              "2": {
                label: i18n("ca.npc.attrTop.npctype.options.piercing"),
                value: false
              },
              "3": {
                label: i18n("ca.npc.attrTop.npctype.options.area"),
                value: false
              },
              "4": {
                label: i18n("ca.npc.attrTop.npctype.options.forceful"),
                value: false
              },
              "5": {
                label: i18n("ca.npc.attrTop.npctype.options.messy"),
                value: false
              },
              "6": {
                label: i18n("ca.npc.attrTop.npctype.options.distinctive"),
                value: false
              }
            }
          }
        },
        attrLeft: {
          want: {
            label: i18n("ca.npc.attrLeft.want.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          methods: {
            label: i18n("ca.npc.attrLeft.methods.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          desc: {
            label: i18n("ca.npc.attrLeft.desc.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          descriptors: {
            label: i18n("ca.npc.attrLeft.descriptors.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          }
        },
        moveTypes: {
          custom: {
            label: i18n("ca.npc.moveTypes.custom.label"),
            moves: []
          }
        },
        equipmentTypes: {
          gear: {
            label: i18n("ca.npc.equipmentTypes.gear.label"),
            moves: []
          }
        }
      }
    }
  };

  // Hide PbtA sheet config options that aren't relevant
  await game.settings.set('pbta', 'advForward', true);
  await game.settings.set('pbta', 'hideRollFormula', true);
  await game.settings.set('pbta', 'hideForward', false);
  await game.settings.set('pbta', 'hideOngoing', true);
  await game.settings.set('pbta', 'hideHold', true);
  await game.settings.set('pbta', 'hideRollMode', false);
  await game.settings.set('pbta', 'hideUses', false);
};
