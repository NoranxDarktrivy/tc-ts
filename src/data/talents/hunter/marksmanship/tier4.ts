import { Talent } from "../../Classes";

export default [
  new Talent(
    "Improved Scorpid Sting",
    "ability_hunter_criticalshot",
    ["Increases the effect of Scorpid Sting by ", "%."],
    2,
    [[15, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: true }
  ),
  new Talent(
    "Improved Serpent Sting",
    "ability_hunter_quickshot",
    ["Increases the damage done by your Serpent Sting by ", "%."],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  new Talent(
    "Mortal Shots",
    "ability_piercedamage",
    ["Increases your ranged critical strike damage bonus by ", "%."],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 1, y: 2 }]
  ),
  null,
];
