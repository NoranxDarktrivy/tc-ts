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
    5,
    [[5, 10, 15, 20, 25]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"]
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
    "Incinerate",
    "spell_fire_burnout",
    [
      "Deals 222 to 257 Fire damage to your target and an additional 59 to 69 Fire damage if the target is affected by an Immolate spell.",
    ],
    1,
    [[]],
    null,
    null,
    "214 Mana",
    "30 yd range",
    "2.5 sec cast",
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
];

export default tier5;
