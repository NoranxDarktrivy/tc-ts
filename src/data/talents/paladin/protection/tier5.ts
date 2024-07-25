import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Improved Blessing of Freedom",
    "spell_holy_sealofvalor",
    [
      "Reduces the cooldown of your Blessing of Freedom by ",
      " sec. In addition, your Blessing of Freedom also reduces the target's threat if they are not affected by Righteous Fury.",
    ],
    3,
    [[1, 2, 3]],
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
    "Holy Shield",
    "spell_holy_blessingofprotection",
    [
      "Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.",
    ],
    1,
    [[]],
    null,
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
  null,
];

export default tier5;
