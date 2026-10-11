import batmanVsSuperman from "./Batman vs Superman.webp";
import deadpoolMaximumEffort from "./Deadpool Maximum Effort.webp";
import deadpoolMercWithAMouth from "./Deadpool Merc with a mouth.webp";
import deadpoolUnprofessionallyDangerous from "./Deadpool Unprofessionally dangerous.webp";
import devilOfHellKitchen from "./Devil of Hell_s Kitchen.webp";
import doctorStrange from "./Dr. Strange Sorcerer Supreme.webp";
import friendlyNeighborhoodSpidey from "./Friendly Neighborhood Spiderman.webp";
import hulkSmash from "./Hulk Smash.webp";
import hulk from "./Hulk.webp";
import phoenixForce from "./Phoenix Force.webp";
import darkKnight from "./The Dark Knight.webp";
import venomOne from "./Venom1.webp";
import venomTwo from "./Venom2.webp";
import wakandaForever from "./Wakanda Forever.webp";
import whySoSerious from "./WhySoSerious.webp";
import symbioticIdentity from "./Symbiotic Identity.webp";

const createDesign = (id: string, title: string, image: typeof whySoSerious) => ({
  id,
  title,
  subtitle: "",
  alt: `${title} mouthguard`,
  tag: `${title} mouthguard`,
  categoryId: "comic-based",
  image,
  featured: false,
  size: "normal",
});

const designs = [
  createDesign(
    "comic-based-batman-v-superman",
    "batman v superman",
    batmanVsSuperman,
  ),
  createDesign(
    "comic-based-deadpool-maximum-effort",
    "Deadpool Maximum Effort",
    deadpoolMaximumEffort,
  ),
  createDesign(
    "comic-based-deadpool-merc-with-a-mouth",
    "Deadpool Merc with a Mouth",
    deadpoolMercWithAMouth,
  ),
  createDesign(
    "comic-based-deadpool-unprofessionally-dangerous",
    "Deadpool Unprofessionally Dangerous",
    deadpoolUnprofessionallyDangerous,
  ),
  createDesign(
    "comic-based-devil-of-hells-kitchen",
    "Devil of Hell's Kitchen",
    devilOfHellKitchen,
  ),
  createDesign(
    "comic-based-doctor-strange",
    "Dr. Strange Sorcerer Supreme",
    doctorStrange,
  ),
  createDesign(
    "comic-based-friendly-neighborhood-spidey",
    "Friendly Neighborhood Spidey",
    friendlyNeighborhoodSpidey,
  ),
  createDesign("comic-based-hulk-smash", "Hulk Smash", hulkSmash),
  createDesign("comic-based-hulk", "Hulk", hulk),
  createDesign("comic-based-phoenix-force", "Phoenix Force", phoenixForce),
  createDesign("comic-based-dark-knight", "The Dark Knight", darkKnight),
  createDesign("comic-based-venom-1", "Venom #1", venomOne),
  createDesign("comic-based-venom-2", "Venom #2", venomTwo),
  createDesign("comic-based-wakanda-forever", "Wakanda Forever", wakandaForever),
  createDesign("comic-based-why-so-serious", "Why So Serious", whySoSerious),
  createDesign(
    "comic-based-symbiotic-identity",
    "Symbiotic Identity",
    symbioticIdentity,
  ),
];

export default designs.sort((a, b) => a.title.localeCompare(b.title));
