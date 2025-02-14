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
  new Talent(
    "Adaptive instincts",
    "ability_druid_predatoryinstincts",
    [
      <>
        When activated, Grants you 30% spell damage and healing when in caster
        form, 30% increased health when in Bear Form or Dire Bear Form, or 50%
        energy regeneration when in Cat Form. Lasts 20 sec.
      </>,
    ],
    1,
    [[]],
    [{ x: 3, y: 1 }],
    [{ x: 5, y: 1 }],
    null,
    "Instant",
    "5 min cooldown",
    null,
    ["D1"],
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    }
  ),
  null,
  null,
];

export default tier5;
