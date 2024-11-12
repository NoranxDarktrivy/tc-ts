import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Pyroclasm",
    "spell_fire_volcano",
    [
      "Gives your Rain of Fire, Hellfire and Soulfire a ",
      "% chance to stun the target for 3 sec.",
    ],
    2,
    [[13, 26]],
    [
      {
        x: 3,
        y: 0,
      },
    ]
  ),
  new Talent(
    "Improved Immolate",
    "spell_fire_immolation",
    ["Increases the initial damage of your Immolate by ", "%."],
    3,
    [[10, 20, 30]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    "Ruin",
    "spell_shadow_shadowwordpain",
    [
      "Increases the critical strike damage bonus of your Destruction spells by 100%.",
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }]
  ),
  new Talent(
    "Improved Soul Fire",
    "spell_fire_fireball02",
    [
      "Critical strikes from your damaging spells have a ",
      "% chance to reduce the cooldown of your Soul Fire by 5 sec and increase its damage by 10%. This effect stacks up to 10 times.",
    ],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  ,
];

export default tier5;
