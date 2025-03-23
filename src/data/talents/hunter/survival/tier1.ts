import { Talent } from "../../Classes";

export default [
  new Talent(
    "Monster Slaying",
    "inv_misc_head_dragon_black",
    [
      "Increases all damage caused against Beasts, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional ",
      "%.",
    ],
    3,
    [[1, 2, 3]]
  ),
  new Talent(
    "Humanoid Slaying",
    "spell_holy_prayerofhealing",
    [
      "Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional ",
      "%.",
    ],
    3,
    [[1, 2, 3]]
  ),
  new Talent(
    "Deflection",
    "ability_parry",
    ["Increases your parry chance by ", "%."],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
];
