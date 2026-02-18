export const adventureMoves = [
  {
    name: "Defy",
    moveType: "adventure",
    rollType: "ask",
    description: "When you act despite an imminent threat or obstacle, say how you do it. Then roll...<br><br>• +STR if you endure or power through it.<br>• +DEX if you act with speed or finesse.<br>• +INT if you employ quick or out-of-the-box thinking.<br>• +WIS if you rely on mental fortitude or sharp senses.<br>• +CHA if you use charm, intrigue, or social grace.",
    results: {
      success: "The threat doesn't come to bear.",
      partial: "It only abates if you make a costly sacrifice or ugly choice, the GM will tell you what.",
      failure: ""
    }
  },
  {
    name: "Engage",
    moveType: "adventure",
    rollType: "str",
    description: "When you openly fight an enemy up close, roll+STR.",
    results: {
      success: "You trade blows, but choose one:<br>• Avoid or withstand their attack<br>• Inflict an extra condition<br>• Take something from them",
      partial: "You and your enemy trade blows, usually inflicting a condition on each other.",
      failure: ""
    }
  },
  {
    name: "Let Fly",
    moveType: "adventure",
    rollType: "dex",
    description: "When you attack a clear target from afar, roll+DEX.",
    results: {
      success: "Your clean hit inflicts a condition.",
      partial: "You inflict a condition but are either put in a dangerous position or gain Disadvantage Forward, your choice.",
      failure: ""
    }
  },
  {
    name: "Ponder",
    moveType: "adventure",
    rollType: "int",
    description: "When you consider what you know about a subject, ask the GM one question about it, say how you might know the answer, and roll+INT.<br><br>You and your allies have Advantage when first acting on this information.<br><br>Example questions:<br>• Where is ___ located?<br>• What could have caused ___?<br>• What might be the best way to ___?<br>• What have I heard or read about this person/creature?",
    results: {
      success: "The GM will tell you the detailed, useful truth.",
      partial: "They will tell you a vague, twisted, or incomplete truth.",
      failure: ""
    }
  },
  {
    name: "Examine",
    moveType: "adventure",
    rollType: "wis",
    description: "When you closely investigate a charged situation, ask the GM one question about it and roll+WIS.<br><br>You and your allies roll with Advantage when first acting on this information.<br><br>Example questions:<br>• Who/what else is hidden?<br>• How can I gain the upper hand?<br>• What would happen here if I ___?<br>• Who is really in control here?",
    results: {
      success: "The GM answers your question and related followup questions truthfully.",
      partial: "The GM answers your question truthfully.",
      failure: ""
    }
  },
  {
    name: "Scrutinize",
    moveType: "adventure",
    rollType: "wis",
    description: "When you study someone during an intimate or prying conversation with them, roll+WIS.<br><br>Gain +1 Insight if they Favor you, even on a 6-.<br><br>During this conversation you can spend Insight 1-for-1 to ask their player (including the GM) any question about this person's thoughts, feelings, or motivations and they must answer truthfully.<br><br>Example questions:<br>• How might I get you to ___?<br>• How do you feel about ___?<br>• How can I gain your Favor?<br>• What is your goal?",
    results: {
      success: "Gain 2 Insight.",
      partial: "Gain 1 Insight.",
      failure: ""
    }
  },
  {
    name: "Compel",
    moveType: "adventure",
    rollType: "cha",
    description: "When you use favor, payment, promises, or threats to get someone to do something, say what you want them to do (or not to do) and roll+CHA. If they Favor you, you may use up their Favor to gain Advantage on the roll.<br><br>If they are a PC, on a 10+ both below occur, on a 7-9 choose one below, and on a 6- they instead can immediately ask you two questions as if they Scrutinized you.<br>• If they do it, you will Favor them.<br>• If they don't do it, they have Disadvantage Forward and you no longer Favor them.",
    results: {
      success: "If they are an NPC, they'll do what you want.",
      partial: "If they are an NPC, they'll only do it if you do something for them in return or Favor them afterwards, the GM will say which.",
      failure: ""
    }
  },
  {
    name: "Cooperate",
    moveType: "adventure",
    rollType: "",
    description: "When you assist one of your companions in an act, you grant them Advantage to any rolls made as part of it, but you are both fully affected by any costs or consequences.<br><br>Multiple people can Cooperate with the same person at once, that person simply gains additional Advantage per person. You can Cooperate before a Move's roll is made, but not after.",
    results: {}
  },
  {
    name: "Push Yourself",
    moveType: "adventure",
    rollType: "",
    description: "When you put all of your effort into one act, roll with Advantage. Then after the roll, you take a condition from the strain, which ignores Armor.",
    results: {}
  },
  {
    name: "Settle In",
    moveType: "adventure",
    rollType: "",
    description: "When you spend time resting as a group, whether it's taking a short break, sleeping overnight, or relaxing for weeks, the GM advances the Ominous Forces. Then, if anyone has 5 or more XP, they Level Up. If you have enough XP, you can Level Up multiple times at once.<br><br>When you've finished resting and resume adventuring, remove all your conditions and refresh your Armor.",
    results: {}
  }
];
