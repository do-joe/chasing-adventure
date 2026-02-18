export const clericMoves = [
  // === Starting Moves ===
  {
    name: "Atone",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you touch someone while invoking a prayer or rite, you can heal them of 1 condition, cure a disease, or lift a curse. You may spend 1 Spirit to heal an additional condition. You can also spend Spirit like Armor to absorb conditions inflicted on yourself by Atoning.",
    results: {}
  },
  {
    name: "Divine Agent",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Starting Move.</strong> You serve a deity. Name your deity, describe them, their domains, and their demands. While your deity Favors you, their domains react obviously to your presence (e.g., animals adore you, nobles bow, demons hiss, etc.). When you ask your deity how to gain their Favor, the GM will give you a task related to their Demands. When you complete it, gain 1 XP and gain their Favor.",
    results: {}
  },
  {
    name: "Invoke Miracle",
    moveType: "class",
    playbook: "Cleric",
    rollType: "wis",
    description: "<strong>Starting Move.</strong> When you beseech your deity to perform a miracle, choose a Miracle you know and roll+WIS.<br><br>You start with 2 Miracles known. When you Level Up, you can choose to Learn a New Miracle instead of another benefit.",
    results: {
      success: "You successfully Invoke the Miracle and its effects come to pass.",
      partial: "The Miracle is still successful but choose one consequence:<br>• The Miracle's Risk manifests as well.<br>• The strain of channeling divine energy costs you 1 Spirit.<br>• Your deity demands something of you, the GM will say what.",
      failure: ""
    }
  },
  {
    name: "Hearts and Minds",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Starting Move.</strong> You have 2 Spirit. When you Settle In, reset your Spirit to this number. When you tend to the spiritual needs of others (offering counsel, hearing confessions, leading prayers, etc.), you may spend 1 Spirit to grant them Advantage Forward.",
    results: {}
  },
  // === Advanced Moves ===
  {
    name: "Anathema",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Enemies of your deity have Disadvantage Forward against you and your allies when they first encounter you.",
    results: {}
  },
  {
    name: "Apotheosis",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> The first time you take a condition in each scene, gain 1 Spirit.",
    results: {}
  },
  {
    name: "Divine Intervention",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you spend all your remaining Spirit (minimum 2), your deity intervenes directly in the world on your behalf. Work with the GM to determine the nature and effect of the intervention.",
    results: {}
  },
  {
    name: "Gifts of the Spirit",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Gain +1 Spirit. When you tend to the spiritual needs of others, instead of granting them Advantage Forward, you may give them +1 Armor until they next Settle In.",
    results: {}
  },
  {
    name: "Hype Man",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Cooperate with Advantage, you may lead a group effort. Everyone involved rolls individually and the highest result is used for everyone, but you must take a condition or spend 1 Spirit for every 6- rolled.",
    results: {}
  },
  {
    name: "Inquisitor",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Examine a person, place, or thing related to your deity's enemies, roll with Advantage and the GM will also tell you a weakness or vulnerability.",
    results: {}
  },
  {
    name: "Interfaith Studies",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You may also Learn Wizard Spells as if they were Miracles. When you Invoke a learned Spell, the GM may also offer you a consequence related to your deity.",
    results: {}
  },
  {
    name: "My Faith is My Shield",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You can spend Spirit like Armor to absorb any conditions, not just those from Atoning.",
    results: {}
  },
  {
    name: "Organizer",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you ask a community of faithful to help you with a task, they will do so to the best of their ability as long as the task aligns with the faith and isn't suicidal.",
    results: {}
  },
  {
    name: "Peaceful",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> No one who recognizes your faith will attack you directly and unprovoked, unless they are an enemy of your deity.",
    results: {}
  },
  {
    name: "Shepherd",
    moveType: "class",
    playbook: "Cleric",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you publicly proclaim a warning, judgment, or belief, those nearby notice and listen to your words; roll+WIS.",
    results: {
      success: "Choose three:<br>• Your words don't attract unwanted attention.<br>• You can ask your listeners one question as if you had Scrutinized them collectively.<br>• Choose a listener - they now Favor you.<br>• Your listeners start collaboratively working towards something you choose (build a bridge, burn a manor, acquire a treasure, etc.).",
      partial: "Choose two from the list.",
      failure: ""
    }
  },
  {
    name: "Spirit of Greatness",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Gain +1 Spirit. When you Invoke a Miracle, you may spend 1 Spirit or use up your deity's Favor to make it Greater.",
    results: {}
  },
  {
    name: "Team Player",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Cooperate, you can Push Yourself or spend 1 Spirit to grant an additional source of Advantage.",
    results: {}
  },
  {
    name: "Thaumaturgy",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You no longer have to touch someone to Atone for them. When you petition your deity to perform a great miracle that pertains to their domains, tell the GM what you desire, they will give you a number of appropriate conditions based on the guidelines below, or say no. Like with Atone, you can spend Spirit like Armor to absorb conditions gained from Thaumaturgy.<br><br>1 Condition - Feed a large crowd<br>2 Conditions - Calm a raging storm<br>3 Conditions - Foresee an Ominous Force<br>4 Conditions - Summon a divine envoy<br>5 Conditions - Destroy or reshape a land",
    results: {}
  },
  {
    name: "Theologian",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Ponder or Examine something related to your deity's domains, you may ignore penalties from conditions and roll either +WIS or +INT.",
    results: {}
  },
  {
    name: "Wrathful",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Gain +1 Spirit. When you inflict a condition, you may spend 1 Spirit to inflict an extra condition.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Secret of the Divine",
    moveType: "class",
    playbook: "Cleric",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> You discover the greatest secret of your faith. Choose one way listed below that this secret can be used, or create a new one, then work with the GM to define what this secret is, how you learned it, and how it affects your faith.<br><br>• You can destroy your deity's enemies forever.<br>• You can ascend to become a deity yourself.<br>• You can fundamentally alter the world in a way related to your deity's domains.",
    results: {}
  }
];
