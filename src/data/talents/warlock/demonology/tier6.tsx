import React from "react";
import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Demonic Protection",
    "spell_shadow_demonicempathy",
    ["Grants ", "% of the effect of your active Armor to your demon."],
    2,
    [[50, 100]],
    [{ x: 4, y: 0 }],
    [{ x: null, y: null }],
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
  new Talent(
    "Master Demonologist",
    "spell_shadow_shadowpact",
    [
      <>
        Gives the Warlock and the summoned Demon an effect as long as the Demon
        is active.
        <br />
        <br />
        Imp: Reduces threat caused by{" "}
      </>,
      <>
        %. <br />
        <br />
        Void Walker: Reduces physical damage taken by{" "}
      </>,
      <>
        % of total Health every 4 sec.
        <br />
        <br />
        Succubus/Incubus: increases all damage caused by{" "}
      </>,
      <>
        %. <br />
        <br />
        Felhunter: Increases all resistances by{" "}
      </>,
      " per level.",
    ],
    5,
    [
      [4, 8, 12, 16, 20],
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
      [0.2, 0.4, 0.6, 0.8, 1],
    ],
    [{ x: 2, y: 2 }]
  ),
  null,
];

export default tier6;
