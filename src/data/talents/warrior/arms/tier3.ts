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
    "Heroic Focus",
    "ability_warrior_bullrush",
    ["Reduces the rage cost of your next two abilities by 100%."],
    1,
    [[]],
    null,
    null,
    null,
    null,
    "Instant",
    "2 min cooldown",
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
  new Talent(
    "Thunder Strike",
    "spell_nature_thunderclap",
    [
      "Increases the damage of your Thunder Clap by ",
      "% when hitting only one target.",
    ],
    3,
    [[100, 200, 300]],
    [{ x: 1, y: 3 }],
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
];

export default tier3;
