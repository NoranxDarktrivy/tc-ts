import { Talent } from "../../Classes";

const tier5 = [
  null,
  new Talent(
    "Whiteout",
    "spell_deathknight_icetouch",
    [
      "Your next Arcane Missiles, Fireball, Frostbolt or Scorch hits all frozen and chilled enemies within 15 yards of your target.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [
      {
        x: 6,
        y: 1,
      },
    ],
    null,
    null,
    "Instant",
    "2 min cooldown",
    ["D2"],
    { isNew: true, isMoved: false, isChanged: false },
  ),
  new Talent(
    "Improved Cone of Cold",
    "spell_frost_glacier",
    ["Increases the damage done by your Cone of Cold spell by ", "%."],
    3,
    [[15, 30, 45]],
  ),
  null,
];

export default tier5;
