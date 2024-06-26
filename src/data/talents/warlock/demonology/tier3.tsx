import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Improved Sayaad', 'ability_warlock_randomizesuccubusincubus', ["Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss by ", '% and increases the duration of Seduction and Invisibility by ', '%.'], 3, [
    [10, 20, 30],
    [10, 20, 30],
  ]),
  new Talent(
    'Demonic Sacrifice',
    'spell_shadow_psychicscream',
    [
      <>
        Sacrifices your demon to get an effect that lasts 30 min. Any demon summoned cancels the effect. <br />
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
    null,
    '100 yd range',
    null,
    'Instant',
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  new Talent(
    'Fel Stamina',
    'spell_shadow_antishadow',
    ['Increases the Stamina of your Imp, Succubus, Incubus, Void Walker and Felhunter by ', '% and increases your maximum health by ', '%.'],
    5,
    [
      [3, 6, 9, 12, 15],
      [1, 2, 3, 4, 5],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent('Mana Feed', 'spell_shadow_manafeed', ['When you gain mana from any source, your active demon gains ', '% of the mana you gain.'], 3, [[20, 40, 60]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier3
