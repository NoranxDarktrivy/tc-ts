import dwarf from "./race-changes/dwarf";
import gnome from "./race-changes/gnome";
import human from "./race-changes/human";
import nightElf from "./race-changes/night-elf";
import orc from "./race-changes/orc";
import tauren from "./race-changes/tauren";
import troll from "./race-changes/troll";
import undead from "./race-changes/undead";

export default {
  title: "Race changes",
  note: "Some race/class combinations are lacking in certain areas, or get outcompeted in certain roles. The aim of these changes is that an argument could be made for any available race/class combination.",
  content: [human, dwarf, gnome, nightElf, orc, troll, tauren, undead],
};
