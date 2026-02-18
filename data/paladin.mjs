export const paladinMoves = [
  // === Starting Moves ===
  {
    name: "Armed and Ready",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Starting Move.</strong> Ignore the Clumsy tag on armor you wear.",
    results: {}
  },
  {
    name: "Devout Virtues",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Starting Move.</strong> You adhere to a strict moral code that grants you power beyond that wielded by normal folk. Each virtue has a vow that must be kept and a boon it grants you. Choose two now:<br><br>• Courage: Refuse to let those who have power abuse it. While you physically stand in defense of another, they will not be targeted or harmed.<br>• Honor: Never harm the helpless or unaware. When you Decree an enemy to surrender or repent, you can treat a 6- as a 7-9.<br>• Justice: Suffer not a crime unpunished. When you question a captive or friendly individual, you know if they're lying.<br>• Loyalty: Remain true to your word and to your allies. Gain +1 Armor. When an ally Cooperates with you, you can share your Armor with them against conditions suffered from Cooperation.<br>• Mercy: Let no innocent creature suffer unaided in your presence. When you heal someone else, you are also healed of one condition.<br>• Purity: Abstain from mortal pleasures and finery. You are immune to all maladies, such as poisons, diseases, and curses.",
    results: {}
  },
  {
    name: "Chains of Faith",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you break one of the vows of your Devout Virtues, depending on the severity of your actions, you may lose access to that virtue and its associated benefits until you atone for your misdeeds. The GM will tell you what you must do.",
    results: {}
  },
  {
    name: "Decree",
    moveType: "class",
    playbook: "Paladin",
    rollType: "cha",
    description: "<strong>Starting Move.</strong> When you demand an NPC follow your order, roll+CHA.",
    results: {
      success: "Choose two, then they flee, attack, or obey you:<br>• If they do anything other than obey you, gain Advantage Forward against them.<br>• They reveal a piece of relevant information to you (unwittingly or otherwise).<br>• They cannot flee.",
      partial: "Choose one, then they flee, attack, or obey you.",
      failure: ""
    }
  },
  {
    name: "Healing Hands",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you treat someone with Supplies or Medicine, choose one additional effect:<br>• It ignores the Slow tag, taking a few moments rather than minutes.<br>• Heal them of an additional Condition.<br>• The patient gains Advantage Forward (PCs only).",
    results: {}
  },
  // === Advanced Moves ===
  {
    name: "Aid for Aid",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you treat someone with Supplies or Medicine, if they didn't already Favor you they do now.",
    results: {}
  },
  {
    name: "Bloodhound",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Examine outlaws, evil creatures, or sworn enemies, you may ask one question listed below in addition to your normal question. The GM will always answer it truthfully, even on a 6-.<br><br>• Where are they located?<br>• What is a vulnerability of theirs?<br>• What are they planning?<br>• Who is close to turning on them?",
    results: {}
  },
  {
    name: "Divine Favor",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have gained the notice of a deity. Gain the Cleric's Divine Agent and Invoke Miracle Moves. Learn 1 Miracle now and gain your deity's Favor. You can only have a maximum of 3 Miracles known.",
    results: {}
  },
  {
    name: "Duel of the Fates",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Decree to a sworn enemy that they fight you one-on-one, here and now, on a 7+ you can make an additional choice and can also choose from these additional options:<br><br>• They won't use cheats or tricks during the fight.<br>• You gain +1 Armor against them during the fight.<br>• The fight counts as intimate and prying conversation with regards to Scrutinizing them.",
    results: {}
  },
  {
    name: "Embolden",
    moveType: "class",
    playbook: "Paladin",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When you give an inspiring speech to your allies before facing a dire threat, roll+CHA.<br><br>During the conflict, you and allies can spend 1 Inspiration to:<br>• Act fearlessly against terrifying foes or odds.<br>• Gain +1 Armor.<br>• Make their attack ignore Armor.<br><br>During the battle, the GM can spend 1 Fear to:<br>• Have you or an ally roll with Disadvantage.<br>• Have an enemy inflict an additional condition on an attack.",
    results: {
      success: "You and each ally gains 2 Inspiration.",
      partial: "You and each ally gains 1 Inspiration and the GM gains 2 Fear.",
      failure: "The GM gains 3 Fear."
    }
  },
  {
    name: "Executioner",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Decree and your target chooses to attack or duel you, you may immediately inflict a Piercing condition onto your target.",
    results: {}
  },
  {
    name: "Healthy Distrust",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Whenever you Defy magic wielded by your foes, treat any result of a 6- as a 7-9.",
    results: {}
  },
  {
    name: "Improvised Care",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You can spend uses of Adventuring Gear as if they were Supplies.",
    results: {}
  },
  {
    name: "Last Stand",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you mark your fourth condition, immediately refresh all of your Armor.",
    results: {}
  },
  {
    name: "Quest",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you dedicate yourself to a mission, describe what the dedication looks like and state what you set out to do. The GM will give you an associated blessing. While you stay true to your goal, this blessing remains yours. At the end of each session, gain 1 XP if you've made significant progress on your quest but haven't completed it. When you complete your Quest, immediately lose your blessing and either gain 3 XP, heal 3 conditions, or heal a Locked condition.",
    results: {}
  },
  {
    name: "Robin",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have taken on a young Apprentice. When your Apprentice Assists you in a task, on a 12+ you both heal 1 condition.",
    results: {}
  },
  {
    name: "The Only Thing They Fear",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Engage or Let Fly, on a 12+ your foe also Fears you. When you Scrutinize, Compel, or Decree someone who Fears you, you can use up that Fear for Advantage on the roll.",
    results: {}
  },
  {
    name: "There Are No Chains On Me",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you go out of your way to violate one of your Virtue's vows, instead of losing access to its boon you alter the vow to fit your action. It is up to you how 'virtuous' the new vow is at all. When you change Playbooks, you can keep any and all altered Virtues if you wish. Once you have altered a Virtue you may no longer take any more Paladin Advanced Moves when you Level Up.",
    results: {}
  },
  {
    name: "Virtuous",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Gain another Devout Virtue.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Grail Hunting",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> <em>Requires Quest.</em> When you Quest, receive two Blessings instead of one.",
    results: {}
  },
  {
    name: "Smite Evil",
    moveType: "class",
    playbook: "Paladin",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> When you condemn an enemy beyond hope, redemption, or salvation, your attacks against them always inflict an extra condition.",
    results: {}
  }
];
