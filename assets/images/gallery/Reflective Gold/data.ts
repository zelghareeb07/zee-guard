import falcon from "./Falcon.webp";
import goldInitial from "./Gold Initial.webp";
import goldSpots from "./Gold Spots.webp";
import goldNameWhiteFangs from "./Gold name White fangs.webp";
import goldName from "./Gold name.webp";
import goldTeeth from "./Gold teeth.webp";
import initials from "./Initials.webp";
import monster from "./MONSTER.webp";
import romioGold from "./Romio Gold.webp";
import theEagle from "./The Eagle.webp";

const createDesign = (id: string, title: string, image: typeof falcon) => ({
  id,
  title,
  subtitle: "",
  alt: `${title} mouthguard`,
  tag: `${title} mouthguard`,
  categoryId: "reflective-gold",
  image,
  featured: false,
  size: "small",
});

const designs = [
  createDesign("reflective-gold-1", "Falcon", falcon),
  {
    ...createDesign("reflective-gold-2", "Gold Initial", goldInitial),
    unoptimized: true,
  },
  createDesign("reflective-gold-3", "Gold Spots", goldSpots),
  createDesign(
    "reflective-gold-4",
    "Gold Name White Fangs",
    goldNameWhiteFangs,
  ),
  createDesign("reflective-gold-5", "Gold Name", goldName),
  createDesign("reflective-gold-6", "Gold Teeth", goldTeeth),
  {
    ...createDesign("reflective-gold-7", "Initials", initials),
    unoptimized: true,
  },
  createDesign("reflective-gold-8", "MONSTER", monster),
  createDesign("reflective-gold-9", "Romio", romioGold),
  createDesign("reflective-gold-10", "The Eagle", theEagle),
];

export default designs.sort((a, b) => a.title.localeCompare(b.title));
