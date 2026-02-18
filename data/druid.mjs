export const druidMoves = [
  // === Starting Moves ===
  {
    name: "At One With The World",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Starting Move.</strong> You can speak with animals and Scrutinize and Compel them. You also don't require food or drink.",
    results: {}
  },
  {
    name: "Attuned Creatures",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Starting Move.</strong> You begin play with two Attuned Creatures of your choice. Each has a species name and an Instinct. When you Level Up, you may add two Attuned Creatures to your list instead of another benefit.<br><br>Instinct examples: smash and tear, fly free without care, prey upon the weak and isolated, consume and devour, skulk and ambush, weave webs and victimise the foolish, assault and challenge the brave or strong.",
    results: {}
  },
  {
    name: "Commune",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Starting Move.</strong> When you spend some time in a place, connecting with nearby creatures and spirits, roll+WIS. You will be granted a vision of significance to you, your allies, or the spirits around you, the GM will describe it.",
    results: {
      success: "The vision will be clear and helpful.",
      partial: "The vision is unclear and murky.",
      failure: "The vision is frightening or traumatic."
    }
  },
  {
    name: "Shapeshift",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Starting Move.</strong> When you call upon the wilds to change your shape, choose one of your Attuned Creatures to change into and roll+WIS.<br><br>While in an animal shape, you gain any innate abilities and weaknesses of the form: claws, wings, gills, etc. You also gain the Instinct of your new form. This primal urge is something innate to each creature and becomes a part of you while you are shapeshifted.<br><br>You don't need to Shapeshift to change back into your normal shape, though you may need to Resist Instinct.",
    results: {
      success: "You transform quickly and without issue.",
      partial: "You still transform, but you draw unwanted attention or trouble.",
      failure: ""
    }
  },
  {
    name: "Resist Instinct",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Starting Move.</strong> When you try to change shape without having fulfilled your Instinct, roll+WIS.",
    results: {
      success: "You succeed and are now able to transform. If you're changing back to normal, you do so. If you're changing into another creature, roll to Shapeshift.",
      partial: "You succeed, but won't be able to transform back into your previous form until you reattune with it by fulfilling its Instinct.",
      failure: ""
    }
  },
  // === Advanced Moves ===
  {
    name: "Apex",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you take the form of a fearsome predator, your attacks can gain either Near, Piercing, or Area - choose as appropriate to the shape. Additionally, your attacks may also be Messy, Forceful, and/or Vicious depending on the form.",
    results: {}
  },
  {
    name: "Back to Basics",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you reveal a flaw or failure of civilization to an individual or group, roll+WIS.",
    results: {
      success: "Choose two:<br>• They pledge to repair or account for the issue.<br>• They withdraw from civilization and begin connecting more with the natural world.<br>• They offer assistance to you and nature.<br>• They attack or sabotage an enemy of nature.",
      partial: "Choose one from the list.",
      failure: ""
    }
  },
  {
    name: "Balance",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you inflict a condition, gain 1 Balance. When you touch someone and invoke healing spirits, you may spend Balance. For each 2 Balance spent, they heal 1 condition. When you Settle In, lose all Balance.",
    results: {}
  },
  {
    name: "Barkskin",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> While your feet touch the ground, you have +2 Armor against physical injuries.",
    results: {}
  },
  {
    name: "Bridge Between Worlds",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You see the patterns that make up the fabric of the world. You can now apply your At One With the World and Shapeshift Moves to inanimate natural objects (plants, rocks, etc.), as well as pure elements (fire, water, air, and earth). Add one such Attuned transformation now.",
    results: {}
  },
  {
    name: "Call of the Wild",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you cry out to the wilderness for aid, choose a suitable type of animal for this environment and roll+WIS.",
    results: {
      success: "That animal arrives to help you for the scene, choose two:<br>• They terrify, intimidate or distract an enemy.<br>• A pack or group of them arrive instead of just one.<br>• They cause no collateral damage.<br>• They continue to accompany you for some time after this scene.",
      partial: "That animal arrives to help you for the scene, choose one from the list.",
      failure: ""
    }
  },
  {
    name: "Earthly Disciple",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Compel an animal or spirit, you may roll+WIS instead of +CHA. When you Ponder animals, nature, or the balance of life, you may roll+WIS instead of +INT.",
    results: {}
  },
  {
    name: "Environmentalist",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you call upon nature to aid you against a foe, name a natural feature of your surroundings (deep roots, rocky cliffs, flowing wind, etc.) and roll+WIS.",
    results: {
      success: "Your foe is temporarily hampered or trapped by the feature, and you also inflict a condition on your foe.",
      partial: "Your foe is temporarily hampered or trapped by the feature.",
      failure: ""
    }
  },
  {
    name: "Eye of the Tiger",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you mark an animal with blood, mud, or dirt, you can see through its eyes as if they were your own, no matter what distance separates you, and it counts as an Attuned Creature. When you mark a new animal, any old marks lose their power.",
    results: {}
  },
  {
    name: "More Beast Than Man",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Shapeshift, gain Advantage Forward to pursue your shape's Instinct.",
    results: {}
  },
  {
    name: "Part the Sea",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Advanced Move.</strong> When you call upon the spirits for safe passage through a natural danger, environment, or hazard, roll+WIS.",
    results: {
      success: "The way is made safe, but choose one:<br>• It is only safe for you, not your allies or companions.<br>• It is safe for now, but not for long.<br>• The spirits demand a proportional payment or sacrifice in return.",
      partial: "The way is made safe, but choose two from the list.",
      failure: ""
    }
  },
  {
    name: "Predator and Prey",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Whenever you'd like, you may ask \"What is my animal intuition telling me?\" and the GM will answer truthfully.",
    results: {}
  },
  {
    name: "Shed",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you shapeshift after fulfilling your current shape's Instinct (including back to your normal form), heal yourself of one condition.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Nothing More Than Animals",
    moveType: "class",
    playbook: "Druid",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> You can now attune with and Shapeshift into specific people. Gain one such attuned form now. People typically have more complex Instincts than animals. If they are a pre-existing NPC then the GM will tell you their Instinct using their Want and Methods to inform it.",
    results: {}
  },
  {
    name: "Weather Weaver",
    moveType: "class",
    playbook: "Druid",
    rollType: "wis",
    description: "<strong>Requires Level 10+.</strong> When you call upon the spirits to invoke a large natural phenomenon or disaster, roll+WIS.",
    results: {
      success: "Choose two:<br>• The phenomenon appears immediately and lasts as long as you desire.<br>• The land is not permanently damaged or altered.<br>• None of your allies, wildlife or innocents are directly harmed.",
      partial: "Choose one from the list.",
      failure: ""
    }
  }
];
