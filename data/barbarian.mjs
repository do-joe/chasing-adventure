export const barbarianMoves = [
  // === Starting Moves ===
  {
    name: "Formidable",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Starting Move.</strong> You are known for your terrible proficiencies. Choose two:<br><br>• Unencumbered, Unharmed: You have 1 Armor as long as you are not restrained, are not wearing armor, and are not wielding a shield.<br>• Musclebound: Your weapons are always Forceful and Messy.<br>• Immovable Object: Your Armor can't be Pierced.<br>• Unstoppable Force: You have Advantage to Defy a moving danger (traps, swinging weapons, etc.).<br>• Eye for Weakness: At any time you can ask the GM \"Who or what here is weak or vulnerable?\", and they will tell you honestly.<br>• Walking Weapon: Your limbs and body are as formidable as the sharpest sword or heaviest hammer. You can harm any opponent unarmed.<br><br>When you Level Up, you may gain another proficiency instead of another benefit, up to a maximum of four proficiencies.",
    results: {}
  },
  {
    name: "Herculean Appetites",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Starting Move.</strong> Others may content themselves with just a taste of wine, or authority over a servant or two, but you want more. Choose two: Conquest, Pure Destruction, Fame and Glory, Power Over Others, Mortal Pleasures, Riches and Property.<br><br>When you refuse a golden opportunity to sate an appetite, take 1 condition.<br><br>When you sate an appetite, heal yourself of 1 condition.<br><br>When you Push Yourself in pursuit of an appetite, gain two sources of Advantage instead of one.",
    results: {}
  },
  {
    name: "Rampage",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you Engage, on a 10+ if you choose to inflict an extra condition, you instead inflict two extra.",
    results: {}
  },
  // === Advanced Moves ===
  {
    name: "A Good Day to Die",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> While you have four conditions marked, you have Advantage Ongoing on all rolls.",
    results: {}
  },
  {
    name: "Acquired Taste",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Gain another Herculean Appetite.",
    results: {}
  },
  {
    name: "Ancestral Visions",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you ritually sacrifice something significant to the spirits (or gods, ancestors, totem, etc.), roll+WIS.",
    results: {
      success: "Choose three:<br>• Gain a boon, gift, or blessing proportional to the sacrifice you made - the GM will say what.<br>• Ask the GM one question about an enemy's actions, location, or vulnerabilities and they will answer truthfully.<br>• Until you next Settle In, gain +1 Armor (this Armor works against both physical harm and conditions from ignoring your appetites).<br>• Learn of a prime opportunity to fulfill an appetite.",
      partial: "Choose two from the list.",
      failure: "Choose one, but the spirits make a demand of you and will not accept your sacrifices again until you fulfill it."
    }
  },
  {
    name: "Basking In Victory",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you sate an appetite, you or an ally of your choice who helped you gains +1 Armor against anything until you Settle In, as long as that person hasn't benefited from this move yet since you last Settled In.",
    results: {}
  },
  {
    name: "Berserker",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Rampage, you also Pierce Armor.",
    results: {}
  },
  {
    name: "Is That All You've Got?",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you suffer harm at the hand of an enemy, instead of spending Armor to absorb a condition, you may take the condition and spend Armor 1-for-1 for any of the following effects:<br><br>• Your enemy leaves themselves open and exposed.<br>• You learn one of your enemy's weaknesses.<br>• You infuriate or terrify your enemy.",
    results: {}
  },
  {
    name: "Khan of Khans",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When a follower Assists you in pursuit of an appetite, the GM will not invoke a Cost, and if you roll a 10+ they also Favor you.",
    results: {}
  },
  {
    name: "More! Always More!",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you satiate an appetite to the extreme (destroy something precious, gain enormous fame, mountains of riches, etc.), choose two:<br><br>• Gain 1 XP.<br>• Learn of an opportunity to pursue another appetite.<br>• Heal yourself of an additional condition.<br>• Exchange one appetite for another.",
    results: {}
  },
  {
    name: "Not To Be Trifled With",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Any intelligent, mortal creature who sees you knows instinctively that you are a force to be reckoned with and treats you appropriately. When you fight a group or horde of foes at once, they don't inflict extra conditions on you.",
    results: {}
  },
  {
    name: "Samson",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Push Yourself to break free of a restraint or compulsion, be it physical or mental, you automatically succeed and are free.",
    results: {}
  },
  {
    name: "Seasoned Wanderer",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you arrive at a new place of civilization, tell everyone about one important local tradition, ritual, belief, or practice here, as well as how you came to learn this.",
    results: {}
  },
  {
    name: "The Great Destroyer",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Engage, on a 12+, choose something physical your target has; they lose it if doing so doesn't immediately outright kill them.",
    results: {}
  },
  {
    name: "Ugly Truth",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When you smash through social etiquette to call something what it really is, roll+CHA.",
    results: {
      success: "Name someone here who now agrees with and Favors you. You also have Advantage Forward when doing something about it.",
      partial: "Name someone here who now agrees with and Favors you.",
      failure: ""
    }
  },
  {
    name: "Unyielding",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You ignore the penalty from STR conditions.",
    results: {}
  },
  {
    name: "Usurper",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you encounter an entity with significant political or institutional power (your call), you may ask the GM \"How can I best ruin or humiliate them?\", and they will answer you honestly. Gain Advantage Forward to pursue that action.",
    results: {}
  },
  {
    name: "What Are You Waiting For?",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you cry out a challenge to your enemies, name one among them. For now, they will ignore your companions and treat you as the most obvious threat to be dealt with.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Sticks and Stones",
    moveType: "class",
    playbook: "Barbarian",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> You can use any Armor against conditions from any source.",
    results: {}
  }
];
