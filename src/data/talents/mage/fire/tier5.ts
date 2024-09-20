import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Searing Armor",
    "ability_mage_moltenarmor",
    [
      "Increases your critical strike chance by 5, but critical strikes burn 1% of your base mana and base health. Only one type of Armor spell can be active on the Mage at any time. Lasts 30 min.",
    ],
    1,
    [[]],
    null,
    null,
    "270 Mana",
    null,
    "Instant",
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Critical Mass",
    "spell_nature_wispheal",
    ["Increases the critical strike chance of your Fire spells by ", "%."],
    3,
    [[2, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  new Talent(
    "Blast Wave",
    "spell_holy_excorcism_02",
    [
      "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 Fire damage, and dazing them for 6 sec",
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    "215 Mana",
    null,
    "Instant",
    "45 sec cooldown"
  ),
  null,
];

export default tier5;
