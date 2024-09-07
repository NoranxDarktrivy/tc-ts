import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Magic Attunement",
    "spell_nature_abolishmagic",
    [
      "Increases the effect of your Amplify Magic and Dampen Magic spells by ",
      "%.",
    ],
    2,
    [[1, 2]],
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
  new Talent(
    "Improved Arcane Explosion",
    "spell_nature_wispsplode",
    [
      "Increases the critical strike chance of your Arcane Explosion spell by ",
      "%.",
    ],
    3,
    [[2, 4, 6]]
  ),
  new Talent(
    "Incanter's Absorption",
    "spell_arcane_arcanepotency",
    [
      "After gaining clearcasting, you gain an Incanter's Shield for 6 sec. The shield absorbs up to 80 Magic damage and increases you critical strike chance by 10%.",
    ],
    1,
    [[]],
    [{ x: 1, y: 2 }],
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
    "Missile Barrage",
    "ability_mage_missilebarrage",
    [
      "Gives your offensive spell crits from Arcane Blast, Fireball, Frostbolt and Scorch a ",
      "% chance to increase the damage of your next Arcane Missiles spell by 50% and reduce the mana cost by 100%.",
    ],
    2,
    [[15, 30]],
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
