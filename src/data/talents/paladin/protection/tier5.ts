import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Blessing of Sanctuary",
    "spell_nature_lightningshield",
    [
      "Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min.  In addition, when the target blocks a melee attack the attacker will take 14 Holy damage.  Players may only have one Blessing on them per Paladin at any one time.",
    ],
    1,
    [[]],
    null,
    [{ x: 4, y: 1 }],
    "60 Mana",
    "30 yd range",
    "Instant",
    null,
    ["R1"]
  ),
  new Talent(
    "Holy Shield",
    "spell_holy_blessingofprotection",
    [
      "Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.",
    ],
    1,
    [[]],
    [{ x: 4, y: 0 }],
    [{ x: 6, y: 1 }],
    "150 Mana",
    null,
    "Instant",
    "10 sec cooldown",
    ["D2"],
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent(
    "Reckoning",
    "spell_holy_blessingofstrength",
    [
      "Gives you a ",
      "% chance to gain an extra attack after being the victim of a critical strike or blocking an attack.",
    ],
    5,
    [[10, 20, 30, 40, 50]],
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
    "Ardent Defender",
    "spell_holy_ardentdefender",
    [
      "When you have less than 35% health, all damage taken is reduced by ",
      "% and you have a ",
      "% chance to not lose casting time when taking damage.",
    ],
    3,
    [
      [10, 20, 30],
      [30, 60, 90],
    ],
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
