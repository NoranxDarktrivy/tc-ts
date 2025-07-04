import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Fel Armor",
    "spell_shadow_felarmour",
    [
      "Surrounds the caster with fel energy, increasing spell power by 35. In addition, you regain 2% of your maximum health every 5 sec. Only one type of Armor spell can be active on the Warlock at any time. Lasts 30 min.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 5, y: 0 }],
    "28% of base mana",
    null,
    "Instant",
    null,
    ["D1"],
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    "Fel Domination",
    "spell_nature_removecurse",
    [
      "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    "Instant",
    "15 min cooldown",
    null,
    null,
    ["D2"]
  ),
  null,
  new Talent(
    "Mana Feed",
    "spell_shadow_manafeed",
    [
      "When you gain mana from any source, your active demon gains ",
      "% of the mana you gain.",
    ],
    3,
    [[30, 60, 90]],
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
