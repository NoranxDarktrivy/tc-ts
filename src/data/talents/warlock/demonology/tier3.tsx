import React from "react";
import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Improved Sayaad",
    "ability_warlock_randomizesuccubusincubus",
    [
      "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss by ",
      "% and increases the duration of Seduction and Invisibility by ",
      "%.",
    ],
    3,
    [
      [10, 20, 30],
      [10, 20, 30],
    ]
  ),
  new Talent(
    "Fel Domination",
    "spell_nature_removecurse",
    [
      "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 3, y: 1 }],
    "Instant",
    "15 min cooldown",
    null,
    null,
    ["D1"]
  ),
  new Talent(
    "Fel Stamina",
    "spell_shadow_antishadow",
    [
      "Increases the maximum Health of your Imp, Succubus, Incubus, Void Walker and Felhunter by ",
      "% and increases your maximum health by ",
      "%.",
    ],
    5,
    [
      [3, 6, 9, 12, 15],
      [1, 2, 3, 4, 5],
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
  null,
];

export default tier3;
