import React from "react";
import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Improved Weapon Totems",
    "spell_fire_enchantweapon",
    [
      "Causes your Windfury Totem to also increase melee attack speed by ",
      "% and your Flametongue Totem to increase spell damage by ",
      "%.",
    ],
    2,
    [
      [2, 4],
      [2, 4],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    "Elemental Weapons",
    "spell_fire_flametounge",
    [
      <>
        Grants an additional effect to your weapon enhancements. <br />
        <br /> Rockbiter: reduces physical damage taken by{" "}
      </>,
      <>
        %. <br />
        <br /> Flametongue: increases your fire damage by{" "}
      </>,
      <>
        %. <br />
        <br /> Windfury: reduces the threat of your windfury attacks by{" "}
      </>,
      <>
        %. <br />
        <br /> Frostbrand: increases the slow effect of your Frostbrand by{" "}
      </>,
      "%.",
    ],
    3,
    [
      [3, 7, 10],
      [7, 14, 20],
      [17, 34, 50],
      [6, 13, 20],
    ],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    "Shamanistic Rage",
    "spell_nature_shamanrage",
    [
      "Reduces all damage taken by 30% and gives your successful melee attacks a chance to regenerate mana equal to 50% of your attack power. Lasts 15 sec.",
    ],
    1,
    [[]],
    null,
    null,
    "Instant",
    "2 min cooldown",
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
];

export default tier5;
