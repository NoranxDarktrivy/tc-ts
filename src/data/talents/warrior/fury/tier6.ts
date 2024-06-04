import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Flagellation', 'ability_warrior_intensifyrage', ['Increases damage done and taken by ', '% for 8 sec after using Bloodrage or Berserker Rage.'], 2, [[10, 20]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Flurry', 'ability_ghoulfrenzy', ['Increases your attack speed by ', '% for your next 3 swings after dealing a melee critical strike.'], 5, [[10, 20, 30, 40, 50]], [{ x: 3, y: 2 }]),
  null,
]

export default tier6
