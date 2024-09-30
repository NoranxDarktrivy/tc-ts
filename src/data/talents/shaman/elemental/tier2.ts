import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Earth's Grasp",
    "spell_nature_stoneclawtotem",
    [
      "Increases the health of your Stoneclaw Totem by ",
      "% and the radius of your Earthbind Totem by ",
      "%.",
    ],
    2,
    [
      [25, 50],
      [20, 40],
    ],
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
    "Spiritual Warding",
    "spell_nature_spiritarmor",
    [
      "Reduces the damage taken from Frost, Fire and Nature spells and effects by ",
      "%.",
    ],
    3,
    [[4, 7, 10]]
  ),
  new Talent(
    "Call of Flame",
    "spell_fire_immolation",
    ["Increases damage done by your Fire Totems by ", "%."],
    3,
    [[5, 10, 15]]
  ),
  new Talent(
    "Focused Insight",
    "spell_shaman_measuredinsight",
    [
      "After casting any Shock spell, your next heal's mana cost is reduced by ",
      "% of the cost of the Shock spell, and its healing effectiveness is increased by ",
      "%.",
    ],
    3,
    [
      [25, 50, 75],
      [10, 20, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isChanged: false, isNew: true, isMoved: false }
  ),
  ,
];

export default tier2;
