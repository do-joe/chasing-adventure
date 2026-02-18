export const fighterMoves = [
  // === Starting Moves ===
  {
    name: "Armed and Ready",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Starting Move.</strong> Ignore the Clumsy tag on armor you wear.",
    results: {}
  },
  {
    name: "Battle Momentum",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Starting Move.</strong> You perfectly understand the back and forth rhythm of a fight. When you suffer or inflict harm as part of a fight (even if it's absorbed with Armor), gain 1 Momentum. Anytime during a fight, you may spend the amount of Momentum in brackets for the following:<br><br>• (3) Restore 1 of your Armor<br>• (3) Inflict an extra condition on an attack<br>• (2) Gain Advantage Forward to Engage or Let Fly<br><br>You can have a maximum of 5 Momentum. When you Settle In, reset Momentum to 0.",
    results: {}
  },
  {
    name: "Particular Set of Skills",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you Compel with threats of violence, roll with Advantage.",
    results: {}
  },
  {
    name: "Demolitionist",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you want to destroy an object, be it a building, magical artifact, or obstacle, tell the GM what it is. It is always possible, but the GM will give you 1 to 4 of the following requirements (separated by \"ANDs\" and \"ORs\"):<br><br>• It's going to take hours/days/weeks.<br>• First you must ___.<br>• You'll need help from ___.<br>• You'll need to use ___.<br>• It will be easy/difficult to repair.<br>• You and your allies will risk ___.<br>• You'll have to use up/wear out ___.",
    results: {}
  },
  {
    name: "Signature Weapon",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Starting Move.</strong> You don't wield an ordinary weapon, but instead have an especially powerful or unusual one. See the Signature Weapon asset for details on creating it.",
    results: {}
  },
  // === Advanced Moves ===
  {
    name: "Basic Training",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You've gotten used to the tireless marches, late nights, early mornings and backbreaking labor. You are unaffected by all but the most extreme forms of exhaustion. Gain +1 Armor against fatigue or exhaustion. When you Settle In, you can stay up all night on watch without feeling tired.",
    results: {}
  },
  {
    name: "Battleborn",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Defy in battle, you may spend 1 Momentum to roll with Advantage.",
    results: {}
  },
  {
    name: "Charge",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Your maximum Momentum is now 7. When you enter a fight, gain 1 Momentum.",
    results: {}
  },
  {
    name: "Disabler",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you harm someone, you may spend 2 Momentum to destroy a weapon or disable a form of attack.",
    results: {}
  },
  {
    name: "Eye for Danger",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Scrutinize a dangerous NPC, the GM will also reveal to you an ability or tactic they can use.",
    results: {}
  },
  {
    name: "Field Repair",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you heal someone with Supplies or Medicine, you or your patient (your choice) also refresh 1 spent Armor.",
    results: {}
  },
  {
    name: "Firm Grip",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you stop someone from leaving your reach, roll with Advantage.",
    results: {}
  },
  {
    name: "Grudge Match",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you attack someone in public, until someone is incapacitated, no one will directly intervene as long as it's just you two fighting.",
    results: {}
  },
  {
    name: "I Aim to Misbehave",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you use Demolitionist, after the GM gives you the requirements you may then ignore or veto one of them.",
    results: {}
  },
  {
    name: "Master Stroke",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Engage, on a 12+ you can make an additional choice.",
    results: {}
  },
  {
    name: "Narsil",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Your signature weapon gains 2 additional enhancements, 4 in total.",
    results: {}
  },
  {
    name: "Percussive Counterspell",
    moveType: "class",
    playbook: "Fighter",
    rollType: "str",
    description: "<strong>Advanced Move.</strong> When you interrupt a spell or magical effect using force, roll+STR. When you're up close and personal with a spellcaster, you may automatically inflict a condition on them whenever they use magic against you.",
    results: {
      success: "You successfully interrupt it.",
      partial: "The magic is reduced or redirected in some way, the GM will say how.",
      failure: ""
    }
  },
  {
    name: "Quarterback",
    moveType: "class",
    playbook: "Fighter",
    rollType: "str",
    description: "<strong>Advanced Move.</strong> While you forcefully hold a creature, it is helpless unless it's particularly large or strong, and even then it is hampered and/or distracted by you.<br><br>When you forcefully grab or tackle a foe, roll+STR.",
    results: {
      success: "You have a good hold of them.",
      partial: "They struggle for a bit at first, inflicting a condition before you get a good hold.",
      failure: ""
    }
  },
  {
    name: "Riddle of Steel",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> Fighting someone counts as intimate and prying conversation for the purposes of Scrutinizing them. When you Scrutinize someone you're fighting, roll with Advantage.",
    results: {}
  },
  {
    name: "Smith",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you Settle In, you can repair one destroyed item or damaged piece of equipment. You can also remove all enhancements from your Signature Weapon and add them to another weapon, which becomes your new Signature Weapon.",
    results: {}
  },
  {
    name: "Steel Gaze",
    moveType: "class",
    playbook: "Fighter",
    rollType: "cha",
    description: "<strong>Advanced Move.</strong> When you enter combat, roll+CHA. During the fight you can spend 1 Steel to make eye contact with an NPC present, who freezes or flinches and can't act until you break it off or they are wounded. When the fight ends lose all Steel.",
    results: {
      success: "Gain 2 Steel.",
      partial: "Gain 1 Steel.",
      failure: "Your enemies immediately identify you as their biggest threat."
    }
  },
  {
    name: "Tough as Nails",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> You have +1 Armor against physical harm.",
    results: {}
  },
  {
    name: "Yoink",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Advanced Move.</strong> When you avoid a blow from a close-up weapon, you may spend 2 Momentum to take that weapon for yourself.",
    results: {}
  },
  // === Level 10+ Moves ===
  {
    name: "Anduril",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> <em>Requires Narsil.</em> Your Signature Weapon gains 2 additional enhancements, 6 in total.",
    results: {}
  },
  {
    name: "Second in Command",
    moveType: "class",
    playbook: "Fighter",
    rollType: "",
    description: "<strong>Requires Level 10+.</strong> When you enter a fight, choose one ally. Whenever they suffer or inflict harm in this fight, gain 1 Momentum.",
    results: {}
  }
];
