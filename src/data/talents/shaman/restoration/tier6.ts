import { Talent } from "../../Classes";

const tier6 = [
  null,
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
