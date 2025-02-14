import { Talent } from "../../Classes";

const tier1 = [
  new Talent(
    "Armored to the Teeth",
    "inv_shoulder_22",
    ["Increases your attack power by ", " for every 100 armor value you have."],
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
    "Booming Voice",
    "spell_nature_purge",
    [
      "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by ",
      "%.",
    ],
    5,
    [[10, 20, 30, 40, 50]]
  ),
  new Talent(
    "Cruelty",
    "ability_rogue_eviscerate",
    [
      "Increases your chance to get a critical strike with melee weapons by ",
      "%.",
    ],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
];

export default tier1;
