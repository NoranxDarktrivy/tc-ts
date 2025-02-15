import { Talent } from "../../Classes";

const tier7 = [
  null,
  new Talent(
    "Lightwell",
    "spell_holy_summonlightwell",
    [
      "Creates a holy Lightwell at target location that heals a nearby party member for 284 to 321 every second for 10 sec. Prioritizes party members with low health.",
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    "225 Mana",
    "40 yd range",
    "1.5 sec cast",
    "3 min cooldown",
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
  null,
];

export default tier7;
