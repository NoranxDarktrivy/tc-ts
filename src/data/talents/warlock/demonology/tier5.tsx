import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Mana Feed",
    "spell_shadow_manafeed",
    [
      "When you gain mana from any source, your active demon gains ",
      "% of the mana you gain.",
    ],
    3,
    [[30, 60, 90]],
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
        <br /> Void Walker: Restores 3% of total Health every 4 sec.
        <br />
        <br />
        Succubus/Incubus: increases your Shadow damage 15%. <br />
        <br />
        Felhunter: Restores 2% of total Mana every 4 sec.
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
    ["D2"]
  ),
  null,
  null,
];

export default tier5;
