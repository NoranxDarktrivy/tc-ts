import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Kick', 'ability_kick', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent('Close Quarters Combat', 'inv_weapon_shortblade_05', ['Increases your critical strike chance and critical strike damage with daggers and fist weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Dual Wield Specialization', 'ability_dualwield', ['Increases the damage of your off-hand weapon by ', '%.'], 5, [[10, 20, 30, 40, 50]], [{ x: 1, y: 2 }]),
  new Talent('Restless Blades', 'ability_rogue_restlessblades', ['Your finishing moves reduce the cooldown of your cooldown abilities by ', ' sec per combo point.'], 2, [[1, 2]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier4
