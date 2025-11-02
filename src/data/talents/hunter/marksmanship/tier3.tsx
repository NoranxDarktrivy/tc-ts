import { Talent } from "../../Classes";

export default [
  new Talent(
    "Aimed Shot",
    "inv_spear_07",
    ["An aimed shot that increases range damage by 70."],
    1,
    [[]],
    null,
    null,
    "75 Mana",
    "8 - 35 yd range",
    "3 sec cast",
    "6 sec cooldown"
  ),
  new Talent(
    "Improved Serpent Sting",
    "ability_hunter_quickshot",
    ["Increases the damage done by your Serpent Sting by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  null,
  new Talent(
    "Hawk Eye",
    "ability_townwatch",
    ["Increases the range of your ranged weapons by ", " yards."],
    3,
    [[2, 4, 6]]
  ),
];
