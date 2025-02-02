import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Improved Judgement",
    "spell_holy_righteousfury",
    ["Decreases the cooldown of your Judgement spell by ", " sec."],
    2,
    [[1, 2]]
  ),
  new Talent(
    "Improved Seal of the Crusader",
    "spell_holy_holysmite",
    [
      "Increases the Holy damage dealt by your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by ",
      "%.",
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
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
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

export default tier2;
