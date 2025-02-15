import { Talent } from "../../Classes";

const tier5 = [
  null,
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
  new Talent(
    "Master Demonologist",
    "spell_shadow_shadowpact",
    [
      <>
        Gives the Warlock and the summoned Demon an effect as long as the Demon
        is active.
        <br />
        <br />
        Imp: increases Fire damage by{" "}
      </>,
      <>
        %. <br />
        <br />
        Void Walker: Restores{" "}
      </>,
      <>
        % of total Health every 4 sec.
        <br />
        <br />
        Succubus/Incubus: increases Shadow damage by{" "}
      </>,
      <>
        %. <br />
        <br />
        Felhunter: Increases all resistances by{" "}
      </>,
      " per level.",
    ],
    5,
    [
      [2, 4, 6, 8, 10],
      [0.8, 1.6, 2.4, 3.2, 4],
      [2, 4, 6, 8, 10],
      [0.2, 0.4, 0, 6, 0.8, 1],
    ],
    [{ x: 3, y: 2 }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ["D1"],
    { isNew: false, isChanged: true, isMoved: true }
  ),
  null,
];

export default tier5;
