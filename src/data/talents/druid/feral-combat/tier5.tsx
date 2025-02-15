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
    "ability_druid_mastershapeshifter",
    [
      <>
        When activated, Grants you 30% spell damage and healing when in caster
        form, 30% increased health when in Bear Form or Dire Bear Form, or 50%
        energy regeneration when in Cat Form. Lasts 15 sec.
      </>,
    ],
    1,
    [[]],
    [{ x: 3, y: 1 }],
    [{ x: 5, y: 1 }],
    null,
    null,
    "Instant",
    "5 min cooldown",
    ["D1"],
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    }
  ),
  new Talent(
    "Improved Swipe",
    "inv_misc_monsterclaw_03",
    ["Icreases the damage of Swipe against your current target by ", "%."],
    2,
    [[35, 70]],
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
