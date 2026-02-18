export const wizardMoves = [
  // === Starting Moves ===
  {
    name: "Evoke a Spell",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you unleash your magical talents, choose a Spell you know and roll+SPELL.<br><br>You start with 2 Spells known. When you Level Up, you can choose to Learn a New Spell instead of another benefit.<br><br>SPELL is determined by your Background (INT for Scholar, WIS for Seer, CHA for Sorceror).",
    results: {
      success: "You successfully evoke the Spell and its effects come to pass.",
      partial: "The Spell is still successful but choose one consequence:<br>• The Spell's Risk manifests as well.<br>• The Spell's magic drains you. You take -1 Ongoing to Evoke Spells until you next Settle In.<br>• Using it puts you in danger or draws unwanted attention, the GM will say how.",
      failure: ""
    }
  },
  {
    name: "Prestidigitation",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Starting Move.</strong> You can easily invoke minor magical effects without issue. Slowly moving small objects, creating minor obvious illusions, generating mild heat and sources of light, and other similar feats are all easily within your power without Evoking a Spell or performing a Ritual.",
    results: {}
  },
  {
    name: "Ritual",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you set out to achieve a powerful magical effect, tell the GM what you're trying to achieve. Any and all Ritual effects are possible, but the GM will give you 1 to 4 of the following conditions (separated by \"ANDs\" and \"ORs\"):<br><br>• It's going to take days/weeks/months.<br>• First you must ___.<br>• You'll need help from ___.<br>• It will require ___.<br>• The effect will be unreliable or limited.<br>• You and your allies will risk ___.<br>• You'll have to destroy ___ to do it.<br><br>When you perform a Ritual while accessing a source of great magical power, you may ignore one requirement of your choice.",
    results: {}
  },
  // === Advanced Moves ===
  {
    name: "Advise",
    moveType: "class",
    playbook: "Wizard",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When another PC comes to you for advice and you honestly tell them what you think is best, they gain Advantage Forward to do as you suggest.<br><br>When you give sound advice to a receptive NPC, roll+CHA.",
    results: {
      success: "They follow your advice as best they can and appreciate it enough to Favor you.",
      partial: "They follow your advice as best they can.",
      failure: "They either act against your advice or need your help; the GM will say which and how."
    }
  },
  {
    name: "Arcane Ward",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have +1 Armor against spells and magic.",
    results: {}
  },
  {
    name: "Assimilate",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> <em>Requires Dispel Magic or Counterspell.</em> When you Push Yourself to Dispel Magic or Counterspell, on a 7+ you can absorb and store the magical effect for later. The magic can then be released like Evoking a Spell, after which the stored magic dissipates. If you release the stored magic immediately after absorbing it, you can Evoke with Advantage. You can only store one magical effect at a time.",
    results: {}
  },
  {
    name: "Counterspell",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you attempt to counter magic as it is being cast, roll+SPELL.",
    results: {
      success: "The magic is successfully countered and doesn't come to pass.",
      partial: "The magic is countered but choose one:<br>• You can't use magic for a short time.<br>• The unraveled magic causes some collateral damage or side effects.<br>• It's only partially countered, a weaker version manifests instead.",
      failure: ""
    }
  },
  {
    name: "Coven",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Connect with a magical being, on a 7-9 you make the choice instead of the GM. Additionally, no matter the roll, gain Advantage Forward when dealing with that NPC or their problems.",
    results: {}
  },
  {
    name: "Dispel Magic",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you unravel a persistent magical effect, roll+SPELL.",
    results: {
      success: "Choose 3:<br>• The dispel is permanent.<br>• A weaker version of the magic doesn't linger.<br>• The dispelled magic doesn't react or lash out.<br>• It only takes a moment.",
      partial: "Choose 2:<br>• The dispel is permanent.<br>• A weaker version of the magic doesn't linger.<br>• The dispelled magic doesn't react or lash out.<br>• It only takes a moment.",
      failure: ""
    }
  },
  {
    name: "Equivalent Exchange",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> <em>Cannot take Wild Mastery.</em> When you Push Yourself to Evoke a Spell, your Spell becomes Greater.",
    results: {}
  },
  {
    name: "Even Further Beyond",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Choose a single Spell - it is always Greater by default. Furthermore, if it would become Greater again, then its effects increase even more; the GM will say how.",
    results: {}
  },
  {
    name: "Familiar",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have a magical companion as a Follower. This companion has an additional Quality - Magical: You may use your familiar in place of yourself for the purposes of Spell effects and requirements (touch, sight, range, etc.).",
    results: {}
  },
  {
    name: "Ritual Master",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you set out to perform a Ritual, you may ask the GM where the nearest source of great magical power is and they will answer you honestly. Additionally, sources of great magical power let you ignore two Ritual requirements instead of one.",
    results: {}
  },
  {
    name: "Sanctum",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Settle In, you can create your own place of power for the purposes of the Ritual Move. Describe to the GM what kind of power it is and how you're binding it to this place. In return, the GM will tell you of someone or something that will have an interest in your activities.",
    results: {}
  },
  {
    name: "Showoff",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you wow an audience with a display of your magic, roll+SPELL.",
    results: {
      success: "Choose 2:<br>• An NPC you name is present among the crowd.<br>• Your allies have Advantage Ongoing against the crowd while you keep them focused on you.<br>• You are given a gift equivalent to 1 Wealth.",
      partial: "Choose 1:<br>• An NPC you name is present among the crowd.<br>• Your allies have Advantage Ongoing against the crowd while you keep them focused on you.<br>• You are given a gift equivalent to 1 Wealth.",
      failure: ""
    }
  },
  {
    name: "Spellbook",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Settle In, you can exchange one known Spell for another.",
    results: {}
  },
  {
    name: "Wild Mastery",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> <em>Cannot take Equivalent Exchange.</em> When you Evoke a Spell, on a 10+ you may treat it as a 7-9 to make the Spell Greater.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Multitasker",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> You can maintain up to two Ongoing Spells at a time.",
    results: {}
  },
  {
    name: "Unlimited Power",
    moveType: "class",
    playbook: "Wizard",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> When you perform a Ritual, you may take a condition as if you Pushed Yourself to ignore one of its requirements. You may do this multiple times.",
    results: {}
  }
];
