import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Purification",
    "spell_nature_giftofthewaterspirit",
    [
      "Whenever one of your water totems pulse, you have a ",
      "% chance to reduce the mana cost of your next offensive spell by 100%.",
    ],
    3,
    [[10, 20, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent(
    "Purification",
    "spell_frost_wizardmark",
    [
      "Increases the effectiveness of your healing spells by ",
      "% and increases the damage of your nature spells by ",
      "%.",
    ],
    5,
    [
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
    ],
    [{ x: 2, y: 2 }],
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
  null,
];

export default tier6;
