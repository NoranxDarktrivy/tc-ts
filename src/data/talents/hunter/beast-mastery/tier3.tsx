import React from "react";
import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Pathfinding",
    "ability_mount_jungletiger",
    [
      "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ",
      "%.",
    ],
    2,
    [[3, 6]]
  ),
  new Talent(
    "Bestial Swiftness",
    "ability_druid_dash",
    [
      "Increases your outdoor movement speed by 8% and increases the outdoor movement speed of your pets by 30%.",
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
    { isNew: false, isChanged: true, isMoved: false }
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
