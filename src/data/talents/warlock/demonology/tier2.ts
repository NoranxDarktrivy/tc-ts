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
      "% and increases your maximum Mana by ",
      "%.",
    ],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
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
    "Master Conjuror",
    "spell_shadow_sealofkings",
    [
      "Your Firestone and Spellstone also increase your chance to hit by ",
      "%. ",
    ],
    3,
    [[1, 2, 3]],
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
