import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Fel Protection",
    "spell_shadow_demonictactics",
    [
      "Increases the armor rating of your active demon by ",
      "% and reduces area of effect damage taken by your active demon ",
      "%.",
    ],
    3,
    [
      [10, 20, 30],
      [20, 40, 60],
    ],
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
    "Master Summoner",
    "spell_shadow_impphaseshift",
    [
      "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by ",
      " sec and the Mana cost by ",
      "%.",
    ],
    2,
    [
      [2, 4],
      [20, 40],
    ]
  ),
  null,
  null,
];

export default tier4;
