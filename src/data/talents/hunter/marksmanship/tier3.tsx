import { Talent } from "../../Classes";

export default [
  new Talent(
    "Aimed Shot",
    "inv_spear_07",
    ["An aimed shot that increases range damage by 70."],
    1,
    [[]],
    null,
    null,
    "75 Mana",
    "8 - 35 yd range",
    "3 sec cast",
    "6 sec cooldown"
  ),
  new Talent(
    "Stinging Shot",
    "ability_hunter_potentvenom",
    [
      <>
        Your Arcane Shot grants an additional effect based on the current Sting
        on your target.
        <br />
        <br />
        Serpent Sting and Wyvern Sting: deals nature damage to the target equal
        to{" "}
      </>,
      <>
        % of the sting's total damage.
        <br />
        <br />
        Viper Sting: restores{" "}
      </>,
      <>
        % of your base mana.
        <br />
        <br />
        Scorpid Sting: also decrease the target's armor by{" "}
      </>,
      <>% for the duration.</>,
    ],
    3,
    [
      [5, 10, 15],
      [7, 14, 20],
      [4, 7, 10],
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
    "Mortal Shots",
    "ability_piercedamage",
    ["Increases your ranged critical strike damage bonus by ", "%."],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 0, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    "Hawk Eye",
    "ability_townwatch",
    ["Increases the range of your ranged weapons by ", " yards."],
    3,
    [[2, 4, 6]]
  ),
];
