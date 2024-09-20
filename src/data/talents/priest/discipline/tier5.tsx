import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Doctrine",
    "ability_druid_dreamstate",
    [
      <>
        Improves one of your Priest racial abilities. <br />
        <br /> Human: Allows your Feedback to be cast on a friendly target
        within 30 yards and reduces the cooldown by 1 min.
        <br />
        <br />
        Dwarf: Your Chastise increases the next source of direct spell damage to
        the target by 50%.
        <br />
        <br />
        Night Elf: Your Starfall also slows the target's movement speed and
        attack speed by 50%.
        <br />
        <br />
        Troll: Allows your Shadowguard to be cast on friendly targets within 30
        yards and increases the amount of orbs by 3. Can affect up to 2 targets
        at a time.
        <br />
        <br />
        Undead: Your Devouring Plague now also returns mana equal to the damage
        dealt.
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
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Mental Strength",
    "spell_nature_enchantarmor",
    ["Increases your maximum Mana by ", "%."],
    3,
    [[3, 6, 9]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    "Divine Spirit",
    "spell_holy_divinespirit",
    ["Holy power infuses the target, increasing their spirit by 17."],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    "70 Mana",
    "30 yd range",
    "Instant"
  ),
  null,
];

export default tier5;
