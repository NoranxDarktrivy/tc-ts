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
        <br /> Rockbiter: reduces physical damage taken by 10%. <br />
        <br /> Flametongue: gives your Frameongue a 20% chance to strike twice.{" "}
        <br />
        <br /> Windfury: reduces the threat of your windfury attacks by 50%.
        <br />
        <br /> Frostbrand: increases the slow effect of your Frostbrand to 50%%.
      </>,
    ],
    1,
    [[]],
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
    "Mental Quickness",
    "spell_nature_mentalquickness",
    [
      "Reduces the mana cost of your instant cast Shaman spells by ",
      "% and increases your spell power by an amount equal to ",
      "% of your attack power.",
    ],
    3,
    [
      [2, 4, 6],
      [10, 20, 30],
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
  null,
];

export default tier5;
