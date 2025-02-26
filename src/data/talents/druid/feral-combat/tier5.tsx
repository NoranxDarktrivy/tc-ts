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
      <>
        Mangle the target, inflicting damage and causing the target to take
        additional damage from bleed effects for 12 sec. This ability can be
        used in Bear Form, Cat Form or Dire Bear Form.
      </>,
    ],
    1,
    [[]],
    null,
    null,
    "45 energy or 20 rage",
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
