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
    "Devastate",
    "inv_sword_11",
    [
      "Sunder the target's armor causing the Sunder Armor effect. In addition, causes 50% of weapon damage plus 9 for each application of Sunder Armor on the target. The Sunder Armor effect can stack up to 5 times.",
    ],
    1,
    [[]],
    null,
    null,
    "15 Rage",
    "Melee Range",
    "Instant",
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    "Improved Shield Bash",
    "ability_warrior_shieldbash",
    ["Gives your Shield Bash a ", "% chance to silence the target for 2 sec."],
    2,
    [[50, 100]]
  ),
];

export default tier5;
