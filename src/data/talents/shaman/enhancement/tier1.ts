import { Talent } from "../../Classes";

const tier1 = [
  null,
  new Talent(
    "Thundering Strikes",
    "ability_thunderbolt",
    [
      "Increases your chance to get a critical strike with weapon attacks by ",
      "%.",
    ],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 1, y: 1 }],
    null,
    null,
    null,
    null,
    ["D1"],
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    "Shield Specialization",
    "inv_shield_06",
    [
      "Increases your chance to block attacks with a shield by ",
      "% and increases the amount blocked by ",
      "%.",
    ],
    5,
    [
      [1, 2, 3, 4, 5],
      [5, 10, 15, 20, 15],
    ]
  ),
  null,
];

export default tier1;
