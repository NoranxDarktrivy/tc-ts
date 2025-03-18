import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Improved Overpower",
    "inv_sword_05",
    ["Increases the critical strike chance of your Overpower by ", "%."],
    2,
    [[25, 50]]
  ),
  new Talent(
    "Second Wind",
    "ability_hunter_harass",
    [
      "Whenever you are struck by a stun or immobilize effect you will generate 20 rage and 10% of your total health over 10 sec.",
    ],
    1,
    [[]],
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
    "Deep Wounds",
    "ability_backstab",
    [
      "Your critical strikes cause the target to bleed, dealing ",
      "% of your melee weapon's average damage over 12 sec.",
    ],
    3,
    [[20, 40, 60]],
    [{ x: 0, y: 2 }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ["D1"]
  ),
  null,
];

export default tier3;
