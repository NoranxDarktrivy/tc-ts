import { Talent } from "../../Classes";

export default [
  new Talent(
    "Wyvern Sting",
    "inv_spear_02",
    [
      "A stinging shot that puts the target to sleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 300 Nature damage over 6 sec. Only one Sting per Hunter can be active on the target at a time.",
    ],
    1,
    [[]],
    null,
    null,
    "115 Mana",
    "8 - 35 yd range",
    "3 sec cast",
    "2 min cooldown",
    null,
    { isNew: false, isChanged: true, isMoved: true }
  ),
  new Talent(
    "Killer Instinct",
    "spell_holy_blessingofstamina",
    ["Increases your critical strike chance with all attacks by ", "%."],
    3,
    [[1, 2, 3]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  new Talent(
    "Counterattack",
    "ability_warrior_challange",
    [
      "A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.",
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    "45 Mana",
    "Melee range",
    "Instant",
    "5 sec cooldown"
  ),
  null,
];
