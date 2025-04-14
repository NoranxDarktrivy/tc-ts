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
  null,
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
  null,
];

export default tier5;
