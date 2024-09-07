import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Critical Mass",
    "spell_nature_wispheal",
    ["Increases the critical strike chance of your Fire spells by ", "%."],
    3,
    [[2, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    ["R1"],
    {
      isChanged: false,
      isMoved: true,
      isNew: false,
    }
  ),
  new Talent(
    "Combustion",
    "spell_fire_sealoffire",
    [
      "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 critical strikes with Fire spells.",
    ],
    1,
    [[]],
    [{ x: 4, y: 0 }],
    [{ x: 6, y: 1 }],
    null,
    null,
    "Instant",
    "3 min cooldown",
    ["D2"],
    {
      isChanged: false,
      isMoved: true,
      isNew: false,
    }
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
