import { Talent } from "../../Classes";

const tier1 = [
  new Talent(
    "Spiritual Blessing",
    "spell_nature_natureblessing",
    ["Increases your healing received by ", "%."],
    2,
    [[5, 10]],
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
  new Talent(
    "Improved Healing Wave",
    "spell_nature_magicimmunity",
    ["Reduces the casting time of your Healing Wave spell by ", " sec."],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]]
  ),
  new Talent(
    "Tidal Focus",
    "spell_frost_manarecharge",
    ["Reduces the Mana cost of your healing spells by ", "%."],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
];

export default tier1;
