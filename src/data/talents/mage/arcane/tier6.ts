import { Talent } from "../../Classes";

const tier6 = [
  null,
  new Talent(
    "Arcane Instability",
    "spell_shadow_teleport",
    ["Increases your spell damage and critical strike chance by ", "%."],
    3,
    [[1, 2, 3]],
    [{ x: 4, y: 1 }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D1"]
  ),
  new Talent(
    "Unstable Missiles",
    "spell_arcane_starfire",
    [
      "Each time you cast Arcane Missiles, the casting time is reduced by ",
      " sec while the mana cost is increased by 10%. This effect stacks up to 5 times and lasts 8 sec.",
    ],
    3,
    [[0.1, 0.2, 0.3]],
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
  null,
];

export default tier6;
