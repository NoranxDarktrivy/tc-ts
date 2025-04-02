import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Fear Ward",
    "spell_holy_excorcism",
    [
      "Wards the friendly target against Fear. The next Fear effect used against the target will fail, using up the ward. Lasts 10 min.",
    ],
    1,
    [[]],
    null,
    null,
    "100 Mana",
    "30 yd range",
    "Instant",
    "30 sec cooldown",
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Mental Strength",
    "spell_nature_enchantarmor",
    ["Increases your maximum Mana by ", "%."],
    3,
    [[3, 6, 9]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    "Divine Spirit",
    "spell_holy_divinespirit",
    [
      "Holy power infuses the target, increasing their spirit by 17 and increasing their spell damage by 10% of their total Spirit.",
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    "70 Mana",
    "30 yd range",
    "Instant",
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
];

export default tier5;
