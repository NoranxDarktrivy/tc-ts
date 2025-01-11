import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Grace of Mind",
    "spell_holy_symbolofhope",
    [
      "Increases your healing done by ",
      "% and increases the critical strike chance of your healing spells by ",
      "%.",
    ],
    5,
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
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
    "Force of Will",
    "spell_nature_slowingtotem",
    [
      "Increases the critical strike chance of your offensive spells by ",
      "% and your spell damage by ",
      "%.",
    ],
    5,
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ]
  ),
  null,
];

export default tier6;
