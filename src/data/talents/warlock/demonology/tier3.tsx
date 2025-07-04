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
    "Demonic Sacrifice",
    "spell_shadow_psychicscream",
    [
      <>
        Sacrifices your demon to get an effect that lasts 30 min. Any demon
        summoned cancels the effect. <br />
        <br /> Imp: increases your Fire damage by 15%. <br />
        <br /> Void Walker: Restores 3% of total Health every 4 sec.
        <br />
        <br />
        Succubus/Incubus: increases your Shadow damage 15%. <br />
        <br />
        Felhunter: Restores 2% of total Mana every 4 sec.
      </>,
    ],
    1,
    [[]],
    null,
    null,
    "100 yd range",
    null,
    "Instant",
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent(
    "Unholy Power",
    "spell_shadow_shadowworddominate",
    [
      "Increases the damage done by your Imp, Succubus, Incubus, Void Walker and Felhunter by 20%.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ["D3"],
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  new Talent(
    "Fel Stamina",
    "spell_shadow_antishadow",
    [
      "Increases the maximum Health of your Imp, Succubus, Incubus, Void Walker and Felhunter by ",
      "%.",
    ],
    5,
    [[3, 6, 9, 12, 15]]
  ),
];

export default tier3;
