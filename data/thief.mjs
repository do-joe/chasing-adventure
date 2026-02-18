export const thiefMoves = [
  // === Starting Moves ===
  {
    name: "Dirty Fighting",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you have Advantage on Engage, you may roll+DEX instead of +STR.",
    results: {}
  },
  {
    name: "Poisoner",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Starting Move.</strong> You've mastered the care and use of a poison. Choose one example poison from the list below, or work with the GM to create one. Poisons you have mastered are not Dangerous for you to use. When you Settle In, you can create a dose of each of your mastered poisons.<br><br>• Oil of Taggit: Must be consumed. The target falls into a light sleep.<br>• Bloodweed: Requires contact. Until they are cured, the first time the target would hurt someone each scene, they inflict no conditions.<br>• Goldenroot: Must be consumed. The target treats the next person they see as a trusted ally, until proved otherwise.<br>• Serpent's Tears: Requires contact. The target takes 1 extra condition when hurt until they are cured.<br>• Custom: Work with the GM to create one.",
    results: {}
  },
  {
    name: "Wanted",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Starting Move.</strong> Authorities are intent on capturing you for your past crimes, whether you truly committed them or were framed.<br><br>You start with 0 Heat, and your maximum Heat is 4. The GM may increase your Heat as a consequence of another Move, usually involving public attention.<br><br>When you Push Yourself, instead of taking a condition, you may gain 1 Heat. How do you leave evidence of, or witness to, your presence?<br><br>When you reach maximum Heat, law enforcement knows where you are and are moving to capture you, the GM will decide when and how they appear. After they have been defeated, escaped from, bargained with, etc., reset your Heat to 0.<br><br>When you Settle In after covering your tracks, reduce your Heat by 1.",
    results: {}
  },
  {
    name: "Tricks of the Trade",
    moveType: "class",
    playbook: "Thief",
    rollType: "dex",
    description: "<strong>Starting Move.</strong> When you bypass security measures in order to steal something or trespass somewhere, roll+DEX.",
    results: {
      success: "You do it quickly and cleanly.",
      partial: "You do it, but choose one:<br>• Authorities will discover your trail - gain 1 Heat.<br>• Someone nearby is alerted to your presence.<br>• There is an unexpected danger, trap, or ambush inside.",
      failure: ""
    }
  },
  // === Advanced Moves ===
  {
    name: "Ace Up Your Sleeve",
    moveType: "class",
    playbook: "Thief",
    rollType: "dex",
    description: "<strong>Advanced Move.</strong> When you cheat in a game of chance, roll+DEX.",
    results: {
      success: "You decide the outcome of the game.",
      partial: "You still decide the outcome of the game but choose one:<br>• Someone will try to get payback later.<br>• You're not welcome to play here anymore.<br>• You gain 1 Heat.",
      failure: ""
    }
  },
  {
    name: "Appraiser",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Whenever you Examine an object, you can always also ask \"How much Wealth is this worth?\" Additionally, Valuable items you sell are worth an additional 1 Wealth.",
    results: {}
  },
  {
    name: "Case the Joint",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Examine a location with the intention of breaking in and/or stealing something, instead of asking the GM any one question you may ask all of the questions below:<br><br>• What is my best way in and out?<br>• What's the greatest danger here?<br>• What's out of place here?<br>• Where do they keep the valuables?",
    results: {}
  },
  {
    name: "Deep Pockets",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Once per session, you can pull out something out of your pockets that you forgot about until just now, as if you had used Adventuring Gear. When you conceal a small object on your person, no one can find it unless you are bound, stripped, and thoroughly searched. You can conceal up to your DEX stat in items at the same time this way.",
    results: {}
  },
  {
    name: "Honorless",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Refuse (see Favor Moves), roll+CHA instead of +nothing. Additionally, on a 10+ you can choose none.",
    results: {}
  },
  {
    name: "Lair",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You gain a Hideout with the additional unique feature: Safehouse - When you Settle In by covering your tracks and staying low at this Hideout you may decrease your Heat by 2 instead of 1.",
    results: {}
  },
  {
    name: "Poison Expert",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You've mastered two more poisons from Poisoner.",
    results: {}
  },
  {
    name: "Prowler",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> While you move or act quietly and/or stealthily, you are generally unnoticed by ordinary NPCs and have Advantage to Defy being noticed. When you search for a hiding space, the GM will tell you where the best spot is.",
    results: {}
  },
  {
    name: "Pursuer",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> A significant NPC now leads the effort in your capture. This Pursuer will relentlessly chase you wherever you go, and always leads the charge whenever law enforcement moves against you. When you reset your Heat to 0 after dealing with your Pursuer, first gain XP equal to your Heat. Next time they'll be back stronger or better prepared. When your Pursuer is no longer able or willing to hunt you, you temporarily lose access to the rest of this Move. When you Settle In, you may tell the GM that you have gained a new Pursuer and regain access to this Move.",
    results: {}
  },
  {
    name: "Reflexes",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You always act first when the action starts, even when surprised or otherwise caught off-guard.",
    results: {}
  },
  {
    name: "Rooftop Routes",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Gain the Edge in a chase, after the roll you may gain 1 Heat to treat a 6- as a 7-9 or a 7-9 as a 10+.",
    results: {}
  },
  {
    name: "Suspicious Gaze",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you think something's wrong and scan your surroundings, ask the GM \"Is there a trap or ambush here? If so, where would it come from?\" They will answer honestly, and you roll with Advantage to thwart the trap or ambush before it can be brought to bear.",
    results: {}
  },
  {
    name: "Tall Tales",
    moveType: "class",
    playbook: "Thief",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When you tell an outrageous lie that nobody in their right mind would believe, roll+CHA.",
    results: {
      success: "All nearby NPCs believe you anyway, at least until they see or hear something that convinces them otherwise.",
      partial: "They'll be fooled, but not for long.",
      failure: ""
    }
  },
  {
    name: "The Smolder",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You always look good. Even if you're wet, dirty, beat-up, or otherwise disheveled, you still look great. When you use your impeccable good-looks and considerable charms to Compel someone, treat them as if they Favor you, but gain 1 Heat as you are burned into their memory.",
    results: {}
  },
  {
    name: "Trust Me",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Advanced Move.</strong> As long as you show a friendly face, anyone not already actively hostile towards you will treat you as a friend until proven otherwise. Anything you say will be accepted as open honesty unless hard evidence is given to the contrary.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Thieves Guild",
    moveType: "class",
    playbook: "Thief",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> You have garnered a handful of like-minded accomplices. Gain a Follower with the additional Quality - Gang: This follower is a small group of individuals instead of a single one. If all of them are present they can assist two PCs at once. Additionally, once per session you can declare that your gang was already working on something as if they were an Assistant asset.",
    results: {}
  }
];
