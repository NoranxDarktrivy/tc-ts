import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Gloom",
    "spell_shadow_animatedead",
    [
      "Reduces the chance your damage over time effects are dispelled by ",
      "%.",
    ],
    2,
    [[25, 50]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    "Grim Reach",
    "spell_shadow_callofbone",
    ["Increases the range of your Affliction spells by ", "%."],
    2,
    [[10, 20]]
  ),
  new Talent(
    "Nightfall",
    "spell_shadow_twilight",
    [
      "Gives your Corruption and Drain Life spells a ",
      "% chance to cause you to enter a Shadow Trance state after damaging an opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
    ],
    2,
    [[2, 4]]
  ),
  null,
];

export default tier4;
