import React from "react";
import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Aspect Mastery",
    "ability_hunter_aspectmastery",
    [
      <>
        Grants an additional effect to your aspects. <br />
        <br />
        Aspect of the Viper - Reduces the damage penalty by 10%. <br />
        <br /> Aspect of the Monkey - Reduces the damage done to you while
        active by 5%.
        <br />
        <br />
        Aspect of the Hawk and Beast - Increases the attack power bonus by 30%.
        <br />
        <br />
        Aspect of the Pack and Cheetah - Increases the movement speed by 10%.
        <br />
      </>,
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Bestial Swiftness",
    "ability_druid_dash",
    ["Increases the outdoor movement speed of your pets by 30%."],
    1,
    [[]]
  ),
  new Talent(
    "Unleashed Fury",
    "ability_bullrush",
    ["Increases the damage done by your pets by ", "%."],
    5,
    [[4, 8, 12, 16, 20]]
  ),
  null,
];

export default tier3;
