import berserker from "./Berserker.webp";
import blackBelt from "./Black Belt.webp";
import bonjourBitches from "./Bonjour Bitches.webp";
import bruceLee from "./Bruce Lee.webp";
import butterflyAndStarsOne from "./Butterfly & Stars1.webp";
import butterflyAndStarsTwo from "./Butterfly & Stars2.webp";
import cheetah from "./Cheetah.webp";
import cheetos from "./Cheetos.webp";
import clawScratches from "./Claw Scratches.webp";
import crimsonInferno from "./Crimson Inferno.webp";
import crownedName from "./Crowned Name.webp";
import deer from "./Deer.webp";
import fistOne from "./Fist1.webp";
import fistTwo from "./Fist2.webp";
import flyHigh from "./Fly High.webp";
import goat from "./GOAT.webp";
import girlie from "./Girlie.webp";
import gladiator from "./Gladiator.webp";
import gorilla from "./Gorilla.webp";
import hammer from "./Hammer.webp";
import karateGirl from "./Karate Girl.webp";
import karateGiOne from "./KarateGi1.webp";
import karateGiTwo from "./KarateGi2.webp";
import knight from "./Knight.webp";
import legend from "./Legend.webp";
import lightningOne from "./Lightning1.webp";
import lightningTwo from "./Lightning2.webp";
import lit from "./Lit.webp";
import lolaa from "./Lolaa.webp";
import midnightSunshine from "./Midnight Sunshine.webp";
import mouthguardMadnessOne from "./Mouthguard Madness1.webp";
import mouthguardMadnessTwo from "./Mouthguard Madness2.webp";
import nameAndEagle from "./Name + Eagle.webp";
import ojja from "./Ojja.webp";
import pinkPanther from "./Pink Panther.webp";
import punchAndKick from "./Punch n Kick.webp";
import queen from "./Queen.webp";
import rattleSnake from "./Rattle Snake.webp";
import skulls from "./Skulls.webp";
import sniper from "./Sniper.webp";
import splitName from "./Split Name.webp";
import star from "./Star.webp";
import stylishName from "./Stylish Name.webp";
import tt from "./TT.webp";
import tawheed from "./Tawheed.webp";
import tiger from "./Tiger.webp";
import undisputed from "./Undisputed.webp";
import viper from "./Viper.webp";

const createDesign = (id: string, title: string, image: typeof berserker) => ({
  id,
  title,
  subtitle: "",
  alt: `${title} mouthguard`,
  tag: `${title} mouthguard`,
  categoryId: "collection",
  image,
  featured: false,
  size: "small",
});

const designs = [
  createDesign("collection-1", "Berserker", berserker),
  createDesign("collection-2", "Black Belt", blackBelt),
  createDesign("collection-3", "Bonjour Bitches", bonjourBitches),
  createDesign("collection-4", "Bruce Lee", bruceLee),
  createDesign("collection-5", "Butterfly & Stars #1", butterflyAndStarsOne),
  createDesign("collection-6", "Butterfly & Stars #2", butterflyAndStarsTwo),
  createDesign("collection-7", "Cheetah", cheetah),
  createDesign("collection-8", "Cheetos", cheetos),
  createDesign("collection-9", "Claw Scratches", clawScratches),
  createDesign("collection-10", "Crimson Inferno", crimsonInferno),
  createDesign("collection-11", "Crowned Name", crownedName),
  createDesign("collection-12", "Deer", deer),
  createDesign("collection-13", "Fist #1", fistOne),
  createDesign("collection-14", "Fist #2", fistTwo),
  createDesign("collection-15", "Fly High", flyHigh),
  createDesign("collection-16", "GOAT", goat),
  createDesign("collection-17", "Girlie", girlie),
  createDesign("collection-18", "Gladiator", gladiator),
  createDesign("collection-19", "Gorilla", gorilla),
  createDesign("collection-20", "Hammer", hammer),
  createDesign("collection-21", "Karate Girl", karateGirl),
  createDesign("collection-22", "Karate Gi #1", karateGiOne),
  createDesign("collection-23", "Karate Gi #2", karateGiTwo),
  createDesign("collection-24", "Knight", knight),
  createDesign("collection-25", "Legend", legend),
  createDesign("collection-26", "Lightning #1", lightningOne),
  createDesign("collection-27", "Lightning #2", lightningTwo),
  createDesign("collection-28", "Lit", lit),
  createDesign("collection-29", "Lolaa", lolaa),
  createDesign("collection-30", "Midnight Sunshine", midnightSunshine),
  createDesign("collection-31", "Mouthguard Madness #1", mouthguardMadnessOne),
  createDesign("collection-32", "Mouthguard Madness #2", mouthguardMadnessTwo),
  createDesign("collection-33", "Name + Eagle", nameAndEagle),
  createDesign("collection-34", "Ojja", ojja),
  createDesign("collection-35", "Pink Panther", pinkPanther),
  createDesign("collection-36", "Punch n Kick", punchAndKick),
  createDesign("collection-37", "Queen", queen),
  createDesign("collection-38", "Rattle Snake", rattleSnake),
  createDesign("collection-39", "Skulls", skulls),
  createDesign("collection-40", "Sniper", sniper),
  createDesign("collection-41", "Split Name", splitName),
  createDesign("collection-42", "Star", star),
  createDesign("collection-43", "Stylish Name", stylishName),
  createDesign("collection-44", "TT", tt),
  createDesign("collection-45", "Tawheed", tawheed),
  createDesign("collection-46", "Tiger", tiger),
  createDesign("collection-47", "Undisputed", undisputed),
  createDesign("collection-48", "Viper", viper),
];

export default designs.sort((a, b) => a.title.localeCompare(b.title));
