import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Fel Protection",
    "spell_shadow_demonictactics",
    [
      "Increases the armor rating of your active demon by ",
      "% and reduces area of effect damage taken by your active demon ",
      "%.",
    ],
    3,
    [
      [10, 20, 30],
      [20, 40, 60],
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
  new Talent(
    "Demonic Sacrifice",
    "spell_shadow_psychicscream",
    [
      <>
        Sacrifices your demon to get an effect that lasts 30 min. Any demon
        summoned cancels the effect. <br />
        <br /> Imp: increases your Fire damage by 15%. <br />
        <br /> Void Walker: Restores 6% of total Health every 4 sec.
        <br />
        <br />
        Succubus/Incubus: increases your Shadow damage 15%. <br />
        <br />
        Felhunter: Restores 3% of total Mana every 4 sec.
      </>,
    ],
    1,
    [[]],
    null,
    [{ x: 6, y: 1 }],
    "100 yd range",
    null,
    "Instant",
    null,
    ["D2"],
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
  new Talent(
    "Shadow and Flame",
    "spell_shadow_shadowandflame",
    [
      "Causes your Shadowbolt to increase Fire damage dealt by your and your pet by ",
      "% for 8 sec and your Incinerate a to increase Shadow damage dealt by your and your pet by ",
      "% for 8 sec.",
    ],
    3,
    [
      [5, 10, 15],
      [5, 10, 15],
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
