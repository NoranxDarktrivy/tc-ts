import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Telluric Currents",
    "spell_shaman_tidalwaves",
    [
      "Causes your Lightning spells to restore mana equal to ",
      "% of the damage dealt and increases your spell damage by up to ",
      "% of your bonus healing.",
    ],
    2,
    [
      [20, 40],
      [35, 70],
    ],
    [{ x: 3, y: 2 }],
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
    "Purification",
    "spell_frost_wizardmark",
    ["Increases the effectiveness of your healing spells by ", "%."],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
];

export default tier6;
