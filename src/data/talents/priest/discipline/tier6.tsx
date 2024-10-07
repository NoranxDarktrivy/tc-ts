import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Devotion",
    "ability_racial_avatar",
    [
      "Your direct damaging spells increase your damage dealt to the target by ",
      "% and your direct healing spells increase your healing done to the target ",
      "%. Both effects last 15 sec and stack up to 3 times.",
    ],
    2,
    [
      [2, 4],
      [2, 4],
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
