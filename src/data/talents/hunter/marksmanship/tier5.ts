import { Talent } from "../../Classes";

export default [
  null,
  new Talent(
    "Trueshot Aura",
    "ability_trueshot",
    [
      "Increases the attack power of party members within 45 yards by 50. Lasts 30 min.",
    ],
    1,
    [[]],
    null,
    [{ x: 4, y: 2 }],
    "325 Mana",
    null,
    "Instant",
    null,
    ["R1"],
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    "Barrage",
    "ability_upgrademoonglaive",
    [
      "Increases the damage done by your Multi-Shot and Volley spells by ",
      "%.",
    ],
    3,
    [[5, 10, 15]],
    [{ x: 4, y: 1 }],
    [{ x: null, y: null }],
    null,
    null,
    null,
    null
  ),
  null,
  null,
];
