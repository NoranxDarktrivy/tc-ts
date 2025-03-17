import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Arcane Shielding",
    "spell_shadow_detectlesserinvisibility",
    [
      "Decreases the mana lost per point of damage taken when Mana Shield is active by ",
      "% and increases the resistances granted by Mage Armor by ",
      "%.",
    ],
    2,
    [
      [15, 30],
      [25, 50],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Improved Counterspell",
    "spell_frost_iceshock",
    ["Gives your counterspell a ", "% chance to silence the target for 4 sec."],
    2,
    [[50, 100]]
  ),
  null,
  new Talent(
    "Arcane Meditation",
    "spell_shadow_siphonmana",
    ["Allows ", "% of your Mana regeneration to continue while casting."],
    3,
    [[10, 20, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
];

export default tier4;
