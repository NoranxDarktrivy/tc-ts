import { Talent } from "../../Classes";

const tier6 = [
  null,
  null,
  new Talent(
    "Totemic Fury",
    "spell_fire_totemofwrath",
    [
      "Gives your critical strikes with melee attacks a ",
      "% chance to increase the effect of your totems that affect friendly targets andby 30% for 6 sec.",
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

export default tier6;
