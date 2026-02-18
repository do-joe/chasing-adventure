export const bardMoves = [
  // === Starting Moves ===
  {
    name: "Storied Knowledge",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you first encounter someone or something that you've heard tales, songs, or legends about (your call), tell the GM something interesting you've heard about it. The GM will tell you what else you've heard that complicates things.",
    results: {}
  },
  {
    name: "Expressive Conflict",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Starting Move.</strong> You wield renowned artistic skill (music, writing, painting, etc.), which can do more than just capture hearts and minds. Choose two expressions that you know:<br><br>• Wield your art like a weapon for the scene. When you Engage or Let Fly using your art, you may roll+CHA instead of +STR or +DEX.<br>• Curse a foe, removing 2 of their unused Armor.<br>• Heal yourself or an ally of 1 condition.<br>• Distract, stun, or immobilize a foe.<br><br>You have 3 Art. When you Settle In, reset your Art to this number. When you invoke your artistry, you may spend 1 Art and unleash one known expression.",
    results: {}
  },
  {
    name: "Perform",
    moveType: "class",
    playbook: "Bard",
    rollType: "cha",
    description: "<strong>Starting Move.</strong> When you practice or display your chosen art before an intelligent audience, roll+CHA.<br><br>During or shortly after your performance, you can spend each Awe to name an NPC in the audience and choose one:<br>• This person must speak with me.<br>• This person must give me a gift.<br>• This person Favors me.",
    results: {
      success: "Gain 3 Awe.",
      partial: "Gain 2 Awe.",
      failure: ""
    }
  },
  {
    name: "Speak Softly",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you Scrutinize someone by speaking openly and honestly with them, you can roll+CHA instead of +WIS. You may also choose to gain 1 additional Insight, even on a 6-, but if you do then afterwards they will ask you a question as if they had 1 Insight on you. You may lie or obfuscate in your answer, but if you do you can't use this Move on them again and you lose their Favor forever.",
    results: {}
  },
  // === Advanced Moves ===
  {
    name: "Anything You Can Do, I Can Do Better",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you spend some quality time with another PC, you may share one of your Moves with them, or they with you. If so, erase any previously shared Moves. Whoever gains the Move can use it a number of times equal to your CHA.",
    results: {}
  },
  {
    name: "Aura of Honesty",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you use up someone's Favor when Compelling or Scrutinizing them, on a 6- you still retain their Favor in addition to whatever the GM says. Additionally, when you Speak Softly with someone, you may choose to gain the additional Insight and still lie or obfuscate freely without consequence if they ask you a question in return.",
    results: {}
  },
  {
    name: "Buckle Thy Swash",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Defy your opponent in a one-on-one fight, on a 12+ you also disarm, trip, or otherwise outmaneuver your opponent.",
    results: {}
  },
  {
    name: "Enchanting Performance",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Your Performances can affect non-intelligent creatures and entities, such as undead, animals, plants, and constructs.",
    results: {}
  },
  {
    name: "Encouraging Words",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Settle In, you may comfort or compliment one ally and grant them +1 Armor against anything until they next Settle In.",
    results: {}
  },
  {
    name: "Fugue",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Perform, you may spend 2 Awe to invoke one effect on your entire audience for as long as your performance continues:<br><br>• Instill a singular powerful emotion.<br>• Lull into a deep and infectious slumber.<br>• Hold their attention fully and completely.",
    results: {}
  },
  {
    name: "Prodigy",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Gain +1 Art and learn an additional expression.",
    results: {}
  },
  {
    name: "Researcher",
    moveType: "class",
    playbook: "Bard",
    rollType: "int",
    description: "<strong>Advanced Move.</strong> When you spend downtime seeking out rumors and knowledge, roll+INT. For each one you choose, the GM might ask how you learned it - tell them the truth.",
    results: {
      success: "Choose two:<br>• You learn of a valuable treasure.<br>• You learn of a dangerous enemy or organization.<br>• You learn something useful about an area's history, layout, or politics.",
      partial: "Choose one from the list.",
      failure: ""
    }
  },
  {
    name: "Scholarly Insight",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Name a general topic or subject when you take this Move. When you Ponder this subject, you treat any result of a 6- as a 7-9.",
    results: {}
  },
  {
    name: "Showstopper",
    moveType: "class",
    playbook: "Bard",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When you make a showy, dramatic entrance into a tense situation, describe your grand entrance and roll+CHA.",
    results: {
      success: "Everyone is so shocked that you can make a grand speech or decisive action with Advantage and without bystander interference.",
      partial: "Everyone stops to watch and listen to your entrance without interruption.",
      failure: ""
    }
  },
  {
    name: "Slippery",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Gain The Edge through dashing rogue-ish action, roll with Advantage.",
    results: {}
  },
  {
    name: "Throw Down the Gauntlet",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you demand a formal duel in response to an insult or trespass, your opponent cannot decline, though they may use a substitute, propose conditions, or add complications. While you are in a formal duel, you have +1 Armor against your opponent and your attacks Pierce their Armor.",
    results: {}
  },
  {
    name: "Unflinching",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have +1 Armor against conditions caused by social situations, negative emotions, or mental strain.",
    results: {}
  },
  {
    name: "Well-Traveled",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you return somewhere you've visited before (your call), tell the GM what happened when you were last here; they'll tell you how the situation has changed since then. When you next Connect there, you may treat a result of 6- as 7-9.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Master of the Arts",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> Enhance two known expressions:<br><br>• When you wield your art like a weapon, it's Piercing.<br>• When you distract, stun or immobilize a foe, you can spend an additional Art to make it last until you dismiss it, but you cannot use an expression again until then.<br>• When you curse a foe, you remove all of their Armor.<br>• When you Heal an ally with your art, you also restore 1 of their used Armor.",
    results: {}
  },
  {
    name: "World Renowned",
    moveType: "class",
    playbook: "Bard",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> Gain a Reputation as a master artist and adventurer. When you invoke your Reputation, after you and the GM have said what has been heard about you, you can speak again and add an additional thing they've heard.",
    results: {}
  }
];
