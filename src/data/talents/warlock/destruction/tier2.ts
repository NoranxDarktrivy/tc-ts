import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Demonic Destruction",
    "spell_shadow_curseoftounges",
    [
      "Reduces the cast time of your Imp's Firebolt by ",
      " sec. and reduces the cooldown of your Succubus' and Incubus' Lash of Pain by ",
      " sec.",
    ],
    2,
    [
      [0.5, 1],
      [3, 6],
    ],
    null,
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
    [
      {
        x: 2,
        y: 1,
      },
    ],
    null,
    null,
    null,
    null,
    ["D1"],
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
