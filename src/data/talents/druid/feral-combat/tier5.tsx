import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Savage Fury",
    "ability_druid_ravage",
    [
      "Increases the damage caused by your Claw, Rake, Maul and Swipe abilites by ",
      "%.",
    ],
    2,
    [[10, 20]]
  ),
  null,
  new Talent(
    "Mangle",
    "ability_druid_mangle2",
    [
      "Mangle the target, inflicting damage and causing the target to take additional damage from bleed attacks for 12 sec.",
    ],
    1,
    [[]],
    null,
    null,
    "20 rage or 45 energy",
    "Melee range",
    "Instant",
    null,
    null,
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    }
  ),
  null,
];

export default tier5;
