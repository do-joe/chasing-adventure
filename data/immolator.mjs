export const immolatorMoves = [
  // === Starting Moves ===
  {
    name: "Firebrand",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Starting Move.</strong> You can move and manipulate fire in a variety of ways - dimming, flaring, sparking, changing color, creating shapes and images, and more. Your fire is Distinctive, Fiery, and Near when you fight with it. Additionally, choose two traits for it:<br><br>• Adaptable: Your fire has the Intimate and Close tags.<br>• Restrained: You and nearby allies have +1 Armor against your fire and its effects.<br>• Ambitious: Your fire has the Far tag.<br>• Spontaneous: You can create fire rather than manipulate what's already burning.<br>• Bold: Your fire has the Area tag.<br><br>When you Burn a trait, your fire loses it until you next Settle In.",
    results: {}
  },
  {
    name: "Unleash Flames",
    moveType: "class",
    playbook: "Immolator",
    rollType: "cha",
    description: "<strong>Starting Move.</strong> When you fight using fire as a weapon, roll+CHA.",
    results: {
      success: "You hurt your foe, but choose one:<br>• You cause unintended collateral damage.<br>• You suffer a condition, perhaps due to overexertion or a foe's counterattack.<br>• Choose and Burn one of your fire's traits.<br>• You draw unwanted attention from nearby.",
      partial: "You hurt your foe, but choose two from the list.",
      failure: ""
    }
  },
  {
    name: "Captivate",
    moveType: "class",
    playbook: "Immolator",
    rollType: "cha",
    description: "<strong>Starting Move.</strong> When you share an intimate or enchanting moment with someone, usually with time and privacy, roll+CHA.<br><br>They can reduce your Charm over them by 1 by:<br>• Giving you something they think you want.<br>• Doing something you tell them to do.<br>• Fighting to protect you.<br>• Favoring you, but only if they don't already.<br><br>If they're an NPC, they can't act out against you while Charmed. If they're a PC, you also can spend 1 Charm to inspire or distract them, granting them Advantage or Disadvantage on their next roll.",
    results: {
      success: "You have 2 Charm over them.",
      partial: "You have 1 Charm over them.",
      failure: ""
    }
  },
  {
    name: "From the Ashes",
    moveType: "class",
    playbook: "Immolator",
    rollType: "cha",
    description: "<strong>Starting Move.</strong> When you burn a sacrifice and stare deeply into the flames, ask the GM one question about your sacrifice or something associated with it (owners, loved ones, history, etc.) and roll+CHA.",
    results: {
      success: "You see a clear and detailed vision in the flames that answers your question and related follow-up questions.",
      partial: "You see a brief vision in the flames that answers your question vaguely.",
      failure: ""
    }
  },
  // === Advanced Moves ===
  {
    name: "Agni Kai",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you take a condition or mark Armor due to fire or heat, recover one of your Burned traits.",
    results: {}
  },
  {
    name: "Blades of Chaos",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Your fire gains the additional trait - Cruel: Your fire has the Messy and Vicious tags.",
    results: {}
  },
  {
    name: "Burning Hearts",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you gaze intensely into someone's eyes, you may ask them \"what is your deepest desire?\" Their player will answer with the truth, even if the character does not know or wouldn't answer.",
    results: {}
  },
  {
    name: "By Fire Be Purged",
    moveType: "class",
    playbook: "Immolator",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When you burn away a magical enchantment, compulsion or curse, roll+CHA.",
    results: {
      success: "It is destroyed completely.",
      partial: "Choose one:<br>• It is only cleansed partially or temporarily.<br>• The cleansing has left its mark on the subject (if that's a person they might suffer a condition).<br>• The cleansing draws unwanted attention from the magic's source.",
      failure: ""
    }
  },
  {
    name: "Don't Blink",
    moveType: "class",
    playbook: "Immolator",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When you stand your ground before a creature of fire, such as an elemental or a dragon, roll+CHA.",
    results: {
      success: "You have earned its tentative respect and it will not attack you (for now).",
      partial: "It won't attack you for now but it grows impatient. The GM will tell you what to do to be spared its wrath.",
      failure: ""
    }
  },
  {
    name: "Dragon of the West",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Defy fire or heat, on a 12+ choose one:<br>• Redirect the fire back onto its source.<br>• Kindle your own flame, restoring a Burned trait.<br>• Ask the GM any one question about the flame or its source.",
    results: {}
  },
  {
    name: "Everburning",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you imbue an object with a portion of your fire, it will burn with a dim, heatless flame without being consumed. For each one you choose below, take a cumulative -1 to Unleash Flames rolls until you touch the object and reclaim the flame:<br><br>• The flame is not heatless; the object burns foes when used as a weapon.<br>• The flame is bright, and will illuminate shadows, uncover illusions and reveal invisibility.<br>• The flame remains connected to you; you can see and hear everything near the object.",
    results: {}
  },
  {
    name: "Eye for Destruction",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> At any time, ask the GM \"What here is flammable?\" They will answer truthfully.",
    results: {}
  },
  {
    name: "Hypnotic",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you share a regret, dream, or fear with someone when Captivating them, on a 7+ gain +1 Charm over them.",
    results: {}
  },
  {
    name: "Infernal",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Your fire gains an additional trait of your choice from Firebrand.",
    results: {}
  },
  {
    name: "Mushu",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You now have an animal companion with the additional descriptor - Affinity for Fire: This follower cannot be harmed by any fire or heat, whether it's magical or mundane. See Followers.",
    results: {}
  },
  {
    name: "Scorched Earth",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Your fire gains the additional trait - Furious: Your fire Pierces Armor.",
    results: {}
  },
  {
    name: "Smokestep",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you obscure yourself with a cloud of smoke, ash or cinders, you can instantly transport yourself anywhere within the cloud, or to another nearby cloud.",
    results: {}
  },
  {
    name: "Twice as Bright, Half as Long",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> While channeling your fire, after you roll you may sacrifice something to treat a result of 6- as a 7-9, or a result of 7-9 as a 10+. This sacrifice doesn't need to be physical or material, but it is always notable.",
    results: {}
  },
  {
    name: "Twinflame",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have an additional Drive. Write it down next to your original one. This new Drive also grants 1 XP if it was accomplished by the end of each session. When you Push Yourself to pursue one of your Drives, you may Burn one of your flame's traits instead of taking a condition.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Master of the Flame",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> When you Unleash Flames, on a 10+ you don't have to choose any from the list.",
    results: {}
  },
  {
    name: "Watch the World Burn",
    moveType: "class",
    playbook: "Immolator",
    rollType: "cha",
    description: "<strong>Requires Level 10+.</strong> When you channel the flames and call down a firestorm, tell the GM what you're sacrificing. The sky opens up and fire pours like rain within an area proportionate to your sacrifice; everyone and everything in the area is severely hurt or worse (2-3 conditions). Then roll+CHA.",
    results: {
      success: "You can extinguish the storm with some effort when you so choose.",
      partial: "The fires rage out of control, spreading and growing where they are carried by wind and weather.",
      failure: "Something cruel, intelligent, and hungry arrives with the storm."
    }
  },
  {
    name: "Puppetmaster",
    moveType: "class",
    playbook: "Immolator",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> When you tell an NPC you have Charm over specifically what you desire, until that desire is fulfilled, pursuing it is the only way they can reduce your Charm on them.",
    results: {}
  }
];
