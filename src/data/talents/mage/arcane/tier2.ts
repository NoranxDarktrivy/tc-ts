import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Wand Specialization",
    "inv_wand_01",
    [
      "When you deal damage with your wand, you have ",
      " chance to return 20% of the damage dealt as mana to you.",
    ],
    2,
    [["a", "an increased"]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    "Magic Absorbtion",
    "spell_nature_astralrecalgroup",
    [
      "Increases all resistances by ",
      " per level and causes you to restore mana equal to ",
      "% mana after fully resisting spell damage. 1 sec cooldown.",
    ],
    2,
    [
      [0.5, 1],
      [2, 4],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    "Arcane Concentration",
    "spell_shadow_manaburn",
    [
      "Gives you a ",
      "% chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.",
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  new Talent(
    "Wizardry",
    "ability_mage_potentspirit",
    [
      "When you deal direct damage with a spell, the next damaging spell of another school you cast within 10 sec deals ",
      "% increased damage. This effect stacks up to 3 times.",
    ],
    2,
    [[3, 6]],
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

export default tier2;
