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
    "Improved Arcane Shot",
    "ability_impalingbolt",
    [
      "Your ranged attacks reduce the cooldown of your Arcane Shot by ",
      " sec.",
    ],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    "Improved Scorpid Sting",
    "ability_hunter_criticalshot",
    ["Increases the effect of your Scorpid Sting by ", "%."],
    2,
    [[10, 20]],
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
    "Hawk Eye",
    "ability_townwatch",
    ["Increases the range of your ranged weapons by ", " yards."],
    3,
    [[2, 4, 6]]
  ),
];
