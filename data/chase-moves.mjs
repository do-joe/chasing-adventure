export const chaseMoves = [
  {
    name: "Start the Chase",
    moveType: "chase",
    rollType: "",
    description: "When you enter a chase, either in pursuit or escape, you and your adversary form separate 'sides' that both start with 0 Edge. A chase usually has two sides, the chaser(s) and the chased, but there may be more.<br><br>When you Cooperate in a chase:<br>• If you are not part of the chase, you must join a side of it, and are involved in that side's Edge, conclusion and consequences.<br>• If you are already part of the chase, you must Push Yourself to Cooperate.",
    results: {}
  },
  {
    name: "Gain the Edge",
    moveType: "chase",
    rollType: "ask",
    description: "When you try to get ahead in a chase, say how much Edge you risk (1 to 3), and roll...<br><br>• +STR if you create or destroy obstacles.<br>• +DEX if you sprint, hide or maneuver.<br>• +INT if you distract or misdirect.<br>• +WIS if you watch or listen.<br>• +CHA if you disguise or provoke.<br><br>Then, unless a side has 3 or more Edge, the chase continues and the GM describes what happens next.",
    results: {
      success: "Your side gains that Edge.",
      partial: "Your side and an opposing side both gain that Edge. If there are multiple opposing sides, you choose which one gains it.",
      failure: "An opposing side gains that Edge, the GM will say which."
    }
  },
  {
    name: "It's Over",
    moveType: "chase",
    rollType: "",
    description: "When any side in a chase has 3 or more Edge, the chase comes to an end. Whoever has the most Edge succeeds in escaping or catching their quarry. If multiple sides tie for the most Edge, the side with the most PCs wins (just barely). If that is also tied, then the PC that last Gained the Edge chooses one side to win, with the other tying sides gaining +1 Edge for the purposes of spending it below.<br><br>Losing sides can spend their Edge 1-for-1 to:<br>• Learn something about another party (where they will go, who leads them, how to escape them now, etc.)<br>• Have the chase end somewhere advantageous for them (reinforcements, a trap or lair, an intervening third party, etc.)<br>• Grant Advantage Forward to all PCs on their side.<br>• Inflict Disadvantage Forward on all PCs on an opposing side.",
    results: {}
  },
  {
    name: "Avalanche",
    moveType: "chase",
    rollType: "",
    description: "When you navigate an imminent environmental danger (ongoing trap, rockslide, wildfire, etc.), use the Chase Moves as normal but with the following changes:<br><br>• When you Gain the Edge using knowledge or out-of-the-box thinking, roll+INT.<br>• If the environment's side loses the chase, it may not spend Edge to Learn something of another side, but may spend Edge to inflict 1 Condition on all characters on another side, including PCs.<br>• Every PC on the losing side Crumbles.",
    results: {}
  }
];
