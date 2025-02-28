import { Talent } from "../../Classes";

export default [
  null,
  new Talent(
    "Improved Aspect of the Hawk",
    "spell_nature_ravenform",
    [
      "While Aspect of the Hawk is active, all normal ranged attacks have a ",
      "% chance to increase your ranged attack speed by 30% for 12 sec.",
    ],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    "Improved Aspect of the Beast",
    "ability_mount_pinktiger",
    [
      "While Aspect of the Beast is active, critical strikes from your pet's abilities have a ",
      "% chance to enable your Mongoose Bite.",
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
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  null,
];
