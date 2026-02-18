export const peripheralMoves = [
  {
    name: "End of Session",
    moveType: "peripheral",
    rollType: "",
    description: "At the end of each session, answer the following questions as a group:<br><br>• Did we discover something new and important about the world or characters?<br>• Did we newly visit or significantly alter a memorable location?<br>• Did we overcome a notable obstacle, enemy, or challenge?<br><br>For each \"yes\" answer, everyone marks 1 XP.<br><br>Lastly, gain 1 XP if you accomplished your Drive.",
    results: {}
  },
  {
    name: "Crumble",
    moveType: "peripheral",
    rollType: "",
    description: "When you mark your last condition (other than Armor), your life is untenable.<br><br>When your life is untenable, from conditions or otherwise, you're out of the action for a while. Say how and choose one from the list below:<br><br>• Lock a condition of your choice. It can't be removed except through a Level Up. You still gain XP from rolling with it.<br>• Change to a new Playbook (see Page 81)<br>• Die<br><br>If you're not dead, remove all conditions that aren't Locked. The GM will advance the Ominous Forces and say when you're back in the action.",
    results: {}
  },
  {
    name: "Epiphany",
    moveType: "peripheral",
    rollType: "",
    description: "When you have a change of heart, say what is behind it and write a new Drive.",
    results: {}
  },
  {
    name: "Level Up",
    moveType: "peripheral",
    rollType: "",
    description: "When you have 5 or more XP after Settling In, reduce your XP by 5, increase your Level by 1, and choose one benefit below:<br><br>You can always take these options:<br>• Increase a stat of your choice from +0 to +1.<br>• Take an Advanced Move from your playbook.<br>• Acquire an Asset (see Page 26).<br>• Remove a Locked condition (see Crumble).<br>• Change Playbooks (see Page 81).<br><br>You can take these options only once each:<br>• Increase a stat of your choice from +1 to +2.<br>• Increase a stat of your choice from +1 to +2.<br>• Take a Starting or Advanced Move from another playbook.<br>• Take a Starting or Advanced Move from another playbook.<br><br>Once you reach Level 10 you can also always take these options:<br>• Take an Advanced Move (Level 10+) from your playbook.<br>• Increase a stat of your choice from +2 to +3.<br>• Retire to safety and cease your adventuring.",
    results: {}
  },
  {
    name: "Track Down",
    moveType: "peripheral",
    rollType: "",
    description: "When you venture out from safety in lengthy pursuit of a quarry, roll+Nothing, with Advantage if you already know your quarry's location.",
    results: {
      success: "Choose one.<br>• You are exhausted or distracted. All traveling PCs take a condition from fatigue.<br>• You are noticed, by your quarry or by someone else, and they act accordingly.<br>• You are impeded. A significant obstacle stands between you and your quarry.",
      partial: "Choose two.<br>• You are exhausted or distracted. All traveling PCs take a condition from fatigue.<br>• You are noticed, by your quarry or by someone else, and they act accordingly.<br>• You are impeded. A significant obstacle stands between you and your quarry.",
      failure: "All three.<br>• You are exhausted or distracted. All traveling PCs take a condition from fatigue.<br>• You are noticed, by your quarry or by someone else, and they act accordingly.<br>• You are impeded. A significant obstacle stands between you and your quarry."
    }
  },
  {
    name: "Connect",
    moveType: "peripheral",
    rollType: "cha",
    description: "When you declare you know an NPC who could help and go looking for them, roll+CHA. If you also declare that you Favor them, gain Advantage on the roll.",
    results: {
      success: "You easily find them and they're willing to help.",
      partial: "They might help you, but the GM will choose one:<br>• They have a grudge against you or aren't entirely willing to trust you.<br>• They're already caught up in some trouble.<br>• They're far off, hiding, trapped, or hard to find.",
      failure: ""
    }
  },
  {
    name: "Ask Around",
    moveType: "peripheral",
    rollType: "",
    description: "When you Examine by gathering rumors and information from others, you may spend 1 Wealth to roll with Advantage.",
    results: {}
  },
  {
    name: "Compensate",
    moveType: "peripheral",
    rollType: "",
    description: "When you Compel someone open to bribes, offering 1 Wealth gives you Advantage, and offering 2 Wealth lets you automatically succeed as if you had rolled a 10+.",
    results: {}
  },
  {
    name: "Rejoin",
    moveType: "peripheral",
    rollType: "ask",
    description: "When you return after being away for a session or more, and explain your absence, say what happened and roll...<br><br>• +STR if you fought an enemy or escaped captivity.<br>• +DEX if you did something covert or illicit.<br>• +INT if you learned obscure or ancient knowledge, or invented something.<br>• +WIS if you discovered a scandalous secret, went on a long journey or retreat, or had a spiritual encounter.<br>• +CHA if you made an ally, integrated with a group or culture, or bought something interesting.",
    results: {
      success: "Your adventure was prosperous - gain Advantage Forward and 2 XP.",
      partial: "Your adventure was eventful - gain 2 XP, but the GM will tell you one or two unintended consequences.",
      failure: "Your adventure was perilous - gain 1 XP and the GM will say what trouble has followed you back to the entire group."
    }
  }
];
