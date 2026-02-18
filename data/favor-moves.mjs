export const favorMoves = [
  {
    name: "Gratify",
    moveType: "favor",
    rollType: "",
    description: "When you accomplish a significant task for someone, choose two if you Favor them, or one if you don't:<br><br>• Gain 1 XP<br>• You no longer Favor them<br>• They Favor you<br>• You get to ask them two questions as if you Scrutinized them",
    results: {}
  },
  {
    name: "Refuse",
    moveType: "favor",
    rollType: "",
    description: "When you act against someone you Favor or deny their request, roll+Nothing.",
    results: {
      success: "Choose one.<br>• Someone else no longer Favors you, the GM will say who.<br>• It will cost you or come back to bite you - the GM will say how now or when it's revealed.<br>• You have Disadvantage Forward against them.",
      partial: "Choose two.<br>• Someone else no longer Favors you, the GM will say who.<br>• It will cost you or come back to bite you - the GM will say how now or when it's revealed.<br>• You have Disadvantage Forward against them.",
      failure: "All three.<br>• Someone else no longer Favors you, the GM will say who.<br>• It will cost you or come back to bite you - the GM will say how now or when it's revealed.<br>• You have Disadvantage Forward against them."
    }
  },
  {
    name: "Antagonize",
    moveType: "favor",
    rollType: "",
    description: "When you insult, injure, or disappoint someone who Favors you, they no longer do.",
    results: {}
  },
  {
    name: "Appease",
    moveType: "favor",
    rollType: "",
    description: "When you would Favor someone you already Favor, choose one instead:<br><br>• Heal them of one condition; describe how you do so.<br>• Gain Advantage Forward to aid them or accomplish something for them.",
    results: {}
  }
];
