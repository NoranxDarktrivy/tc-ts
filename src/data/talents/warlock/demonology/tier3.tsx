import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Improved Sayaad",
    "ability_warlock_randomizesuccubusincubus",
    [
      "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss by ",
      "% and increases the duration of Seduction and Invisibility by ",
      "%.",
    ],
    3,
    [
      [10, 20, 30],
      [10, 20, 30],
    ]
  ),
  new Talent(
    "Demonic Empowerment",
    "ability_warlock_demonicempowerment",
    [
      <>
        Grants the Warlock's summoned demon Empowerment. <br />
        <br />
        Imp - Increases the Imp's spell critical strike chance by 20% for 30
        sec.
        <br />
        <br />
        Voidwalker - Increases the Voidwalker's health by 20%, and its threat
        generated from spells and attacks by 20% for 20 sec. <br />
        <br />
        Succubus and Incubus - Instantly vanishes, causing the demon to go into
        an improved Invisibility state. The vanish effect removes all stuns,
        snares and movement impairing effects from the demon. <br />
        <br />
        Felhunter - Dispels all magical effects from the Felhunter.
      </>,
    ],
    1,
    [[]],
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
    "Fel Stamina",
    "spell_shadow_antishadow",
    [
      "Increases the maximum Health of your Imp, Succubus, Incubus, Void Walker and Felhunter by ",
      "%.",
    ],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  new Talent(
    "Mana Feed",
    "spell_shadow_manafeed",
    [
      "When you gain mana from any source, your active demon gains ",
      "% of the mana you gain.",
    ],
    3,
    [[20, 40, 60]],
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

export default tier3;
