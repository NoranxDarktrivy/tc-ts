import { Talent } from "../../Classes";

export default [
  new Talent(
    "Ferocious Inspiration",
    "ability_hunter_ferociousinspiration",
    [
      "When your pet scores a critical hit, all party members have their damage and healing increased by ",
      "% and all party members' pets and summons have their damage increased by ",
      "% for 10 sec.",
    ],
    2,
    [
      [1, 2, 3],
      [3, 6, 9],
    ],
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
  null,
  new Talent(
    "Frenzy",
    "inv_misc_monsterclaw_03",
    [
      "Gives your pet a ",
      "% chance to gain 30% attack speed increase for 8 sec after dealing a critical strike.",
    ],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: 3, y: 2 }]
  ),
  null,
];
