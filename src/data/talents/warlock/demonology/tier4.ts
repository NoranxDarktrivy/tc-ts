import { Talent } from "../../Classes";

const tier4 = [
  null,
  new Talent(
    "Master Summoner",
    "spell_shadow_impphaseshift",
    [
      "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 4 sec and the Mana cost by ",
      "%.",
    ],
    2,
    [[20, 40]],
    [{ x: 2, y: 1 }]
  ),
  new Talent(
    "Unholy Power",
    "spell_shadow_shadowworddominate",
    [
      "Increases the damage done by your Imp, Succubus, Incubus, Void Walker and Felhunter by ",
      "%.",
    ],
    5,
    [[4, 8, 12, 16, 20]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  null,
];

export default tier4;
