import bloodyNameSilverFangs from "./Bloody name + Silver Fangs.webp";
import goldNameWhiteFangs from "./Gold name + White Fangs.webp";
import initialsWhiteFangs from "./Initials + White Fangs.webp";
import nameGoldFangsOne from "./Name + Gold Fangs1.webp";
import nameGoldFangsTwo from "./Name + Gold Fangs2.webp";
import nameGoldTeeth from "./Name + Gold teeth.webp";
import nameWhiteTeeth from "./Name + White teeth.webp";
import numbersGoldFangs from "./Numbers + Gold Fangs.webp";
import scarfaceGoldFangs from "./Scarface gold fangs.webp";
import shhhWhiteFangs from "./Shhh + White Fangs.webp";

const createDesign = (
  id: string,
  title: string,
  image: typeof bloodyNameSilverFangs,
) => ({
  id,
  title,
  subtitle: "",
  alt: `${title} mouthguard`,
  tag: `${title} mouthguard`,
  categoryId: "fangs-and-teeth",
  image,
  featured: false,
  size: "small",
});

const designs = [
  createDesign(
    "fangs-and-teeth-1",
    "Bloody Name + Silver Fangs",
    bloodyNameSilverFangs,
  ),
  createDesign(
    "fangs-and-teeth-2",
    "Gold Name + White Fangs",
    goldNameWhiteFangs,
  ),
  createDesign(
    "fangs-and-teeth-3",
    "Initials + White Fangs",
    initialsWhiteFangs,
  ),
  createDesign("fangs-and-teeth-4", "Name + Gold Fangs #1", nameGoldFangsOne),
  createDesign("fangs-and-teeth-5", "Name + Gold Fangs #2", nameGoldFangsTwo),
  createDesign("fangs-and-teeth-6", "Name + Gold Teeth", nameGoldTeeth),
  createDesign("fangs-and-teeth-7", "Name + White Teeth", nameWhiteTeeth),
  createDesign(
    "fangs-and-teeth-8",
    "Numbers + Gold Fangs",
    numbersGoldFangs,
  ),
  createDesign(
    "fangs-and-teeth-9",
    "Scarface Gold Fangs",
    scarfaceGoldFangs,
  ),
  createDesign("fangs-and-teeth-10", "Shhh! + White Fangs", shhhWhiteFangs),
];

export default designs.sort((a, b) => a.title.localeCompare(b.title));
