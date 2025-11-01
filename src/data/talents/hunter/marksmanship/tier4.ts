import { Talent } from "../../Classes";

export default [
  null,
  new Talent(
    "Improved Steady Shot",
    "ability_hunter_improvedsteadyshot",
    [
      "When you Steady Shot twice in a row, your ranged attack speed will be increased by ",
      "% for 8 sec.",
    ],
    3,
    [[5, 10, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Mortal Shots",
    "ability_piercedamage",
    ["Increases your ranged critical strike damage bonus by ", "%."],
    3,
    [[10, 20, 30]],
    [{ x: 1, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
  null,
];
