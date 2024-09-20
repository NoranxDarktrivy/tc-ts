import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Fury of Stormrage",
    "inv_staff_90",
    [
      "Reduces the mana cost of Wrath by ",
      "% and each time you deal damage with Wrath you have a ",
      "% chance to reduce the cast time of your next Healing Touch within 15 sec by 1.5 sec.",
    ],
    2,
    [
      [50, 100],
      [10, 20],
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
    "Improved Regrowth",
    "spell_nature_resistnature",
    ["Increases the critical effect chance of your Regrowth spell by ", "%."],
    5,
    [[10, 20, 30, 40, 50]]
  ),
  null,
];

export default tier6;
