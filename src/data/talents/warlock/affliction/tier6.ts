import { Talent } from "../../Classes";

const tier6 = [
  null,
  new Talent(
    "Shadow Mastery",
    "spell_shadow_shadetruesight",
    [
      "Increases the damage dealt and life drained by your Shadow spells by ",
      "%.",
    ],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: 4, y: 1 }]
  ),
  // new Talent(
  //   "Soul Tap",
  //   "spell_shadow_charm",
  //   [
  //     "Grants party members within 40 yards ",
  //     "% of the mana you gain when you Life Tap.",
  //   ],
  //   2,
  //   [[3, 6]],
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   {
  //     isNew: true,
  //     isChanged: false,
  //     isMoved: false,
  //   }
  // ),
  null,
  null,
];

export default tier6;
