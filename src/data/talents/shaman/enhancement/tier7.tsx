import React from "react";
import { Talent } from "../../Classes";

const tier7 = [
  null,
  new Talent(
    "Stormstrike",
    "spell_holy_sealofmight",
    [
      <>
        Gives you an extra attack that increases the damage of your next Shock
        spell by 20% and grants your next Shock spell an additional effect.{" "}
        <br />
        <br /> Earth Shock: Taunts the target to attack you.
        <br />
        <br /> Flame Shock: Increases the damage by 30%.
        <br />
        <br /> Frost Shock: Roots the target in place for 3 sec.
      </>,
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    "Melee range",
    "10% of base mana",
    "Instant",
    "20 sec cooldown",
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
  null,
];

export default tier7;
