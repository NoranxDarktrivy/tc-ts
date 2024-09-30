import { Talent } from "../../Classes";

const tier7 = [
  null,
  new Talent(
    "Earth Shield",
    "spell_nature_skinofearth",
    [
      "Protects the target with an earthen shield, giving a 30% chance of ignoring spell interruption when damaged and causing attacks to heal the shielded target for 112. This effect can only occur once every few seconds. 6 charges. Lasts 10 min. Earth Shield can only be placed on one target at a time and only one Elemental Shield can be active on a target at a time.",
    ],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    null,
    "230 Mana",
    "40 yard range",
    "Instant",
    null,
    null,
    { isChanged: false, isMoved: false, isNew: true }
  ),
  null,
  null,
];

export default tier7;
