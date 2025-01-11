import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Improved Shield Wall",
    "ability_warrior_shieldwall",
    ["Increases the duration of your Shield Wall by ", " sec."],
    2,
    [[3, 5]]
  ),
  new Talent(
    "Concussion Blow",
    "ability_thunderbolt",
    ["Stuns the target for 5 sec."],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    "15 Rage",
    "Melee Range",
    "Instant cast",
    "45 sec cooldown",
    ["D2"]
  ),
  new Talent(
    "Improved Shield Bash",
    "ability_warrior_shieldbash",
    ["Gives your Shield Bash a ", "% chance to silence the target for 2 sec."],
    2,
    [[50, 100]]
  ),
  new Talent(
    "First Strike",
    "ability_hunter_swiftstrike",
    [
      "Your first weapon attack against an enemy always hits and generates 100% additional rage.",
    ],
    1,
    [[]],
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
];

export default tier5;
