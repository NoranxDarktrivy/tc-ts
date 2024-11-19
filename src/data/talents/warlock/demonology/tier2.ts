import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Improved Demon Armor",
    "spell_shadow_ragingscream",
    [
      "Causes your Demon Armor to also restore mana equal to ",
      "% the restored health.",
    ],
    2,
    [[50, 100]],
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
    "Improved Void Walker",
    "spell_shadow_summonvoidwalker",
    [
      "Increases the effect of your Void Walker's Torment, Sacrifice, Consume Shadows and Suffering spells by ",
      "%.",
    ],
    3,
    [[10, 20, 30]]
  ),
  new Talent(
    "Fel Intellect",
    "spell_holy_magicalsentry",
    [
      "Increases the maximum Mana of your Imp, Succubus, Incubus, Void Walker and Felhunter by ",
      "%.",
    ],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  new Talent(
    "Master Conjuror",
    "spell_shadow_sealofkings",
    ["Increases the effect of your your Firestone and Spellstone by ", "%."],
    3,
    [[15, 30, 45]],
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
];

export default tier2;
