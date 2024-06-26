import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Master Summoner',
    'spell_shadow_impphaseshift',
    ['Reduces the casting time of your summon Succubus, Incubus, Imp, Felhunter or Void Walker by ', ' sec and Mana cost reduced by ', '%.'],
    2,
    [
      [2, 4],
      [20, 40],
    ],
    null,
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1'],
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent(
    'Fel Protection',
    'spell_shadow_demonictactics',
    ['Increases the armor rating of your active demon by ', '% and reduces area of effect damage taken by your active demon ', '%.'],
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
    'Unholy Power',
    'spell_shadow_shadowworddominate',
    ['Increases the damage done by your Imp, Succubus, Incubus, Void Walker and Felhunter by ', '%.'],
    5,
    [[4, 8, 12, 16, 20]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]

export default tier4
