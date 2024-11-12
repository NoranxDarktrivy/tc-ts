import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Gloom",
    "spell_shadow_charm",
    [
      "Gives your Shadow Bolt critical strikes a ",
      "% chance to reset the duration of your active damage over time effects on the target.",
    ],
    2,
    [[50, 100]],
    [{ x: 1, y: 1 }],
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    "Improved Shadow Bolt",
    "spell_shadow_shadowbolt",
    [
      "Your Shadow Bolt critical strikes increase the shadow damage taken by the target by ",
      "% until 4 non-periodic damage sources are applied. Lasts a maximum of 12 sec.",
    ],
    5,
    [[4, 8, 12, 16, 20]],
    null,
    [{ x: 1, y: 0 }],
    null,
    null,
    null,
    null,
    ["L1"],
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    "Aftermath",
    "spell_fire_fire",
    [
      "Gives your Destruction spells a ",
      "% chance to daze the target for 5 sec.",
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
];

export default tier2;
