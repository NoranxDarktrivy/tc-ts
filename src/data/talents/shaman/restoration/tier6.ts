import { Talent } from "../../Classes";

const tier6 = [
  null,
  new Talent(
    "Purification",
    "spell_frost_wizardmark",
    ["Increases the effectiveness of your healing spells by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D1"]
  ),
  new Talent(
    "Telluric Currents",
    "spell_shaman_tidalwaves",
    [
      "Causes your Lightning spells to restore mana equal to ",
      "% of the damage dealt.",
    ],
    2,
    [[20, 40]],
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
];

export default tier6;
