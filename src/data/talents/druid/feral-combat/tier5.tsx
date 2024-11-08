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
    "Survival Instincts",
    "ability_druid_tigersroar",
    [
      <>
        When activated, this grants you 30% of your maximum health for 20 sec.
        After the effect expires, the health is lost. Useable in any form.
      </>,
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    "Instant",
    "3 min cooldown",
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
