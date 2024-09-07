import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Demonic Decree",
    "spell_shadow_demonicempathy",
    [
      "Damage done by you or your summoned demon has a ",
      "% chance to increase the damage done by the other by 10% for 15 sec.",
    ],
    2,
    [[5, 10]],
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
  new Talent(
    "Fel Domination",
    "spell_nature_removecurse",
    [
      "Your next summon of Succubus, Incubus, Imp, Felhunter or Void Walker has its casting time reduced by 5.5 sec and Mana cost reduced by 50%.",
    ],
    1,
    [[]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    null,
    null,
    "Instant",
    "15 min cooldown",
    ["D2"],
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  null,
  null,
];

export default tier5;
