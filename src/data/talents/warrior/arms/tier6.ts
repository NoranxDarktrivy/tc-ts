import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Thunder Strike', 'spell_nature_thunderclap', ['Increases the damage of your Thunder Clap by ', '% when hitting only one target.'], 3, [[100, 200, 300]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent(
    'Blood Frenzy',
    'ability_warrior_bloodfrenzy',
    ['Each time you deal Bleed damage, you gain ', ' Rage. In addition, increases your attack speed by ', '% for each of your active bleed effects, up to 30%'],
    2,
    [
      [3, 6],
      [3, 6],
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
  null,
]

export default tier6
