export const followerMoves = [
  {
    name: "Endeavor",
    moveType: "follower",
    rollType: "",
    description: "When your Follower does a dangerous task alone, they do it to the best of their ability, but are taken out of the action (trapped, injured, distracted, etc.). The GM will say how.",
    results: {}
  },
  {
    name: "Assist",
    moveType: "follower",
    rollType: "",
    description: "When you call on your Follower to help you with a task, roll with Advantage, but they are also exposed to the costs or consequences of your Move. Then the GM will invoke one of their Costs, and the follower will be unwilling or unable to Assist you again until that cost is fulfilled.",
    results: {}
  },
  {
    name: "Command",
    moveType: "follower",
    rollType: "cha",
    description: "When you order your Follower to do something contrary to their Costs, Want, or instincts, roll+CHA. If they Favor you, you may use up their Favor to gain Advantage on the roll.",
    results: {
      success: "They do it as well as you can expect.",
      partial: "The GM chooses one:<br>• The experience endangers them - they do it but are out of the action for some time.<br>• They complain loudly, now or later, and demand compensation or your Favor.<br>• It takes them longer than expected, is done shoddily, or it will cost you later.",
      failure: ""
    }
  }
];
