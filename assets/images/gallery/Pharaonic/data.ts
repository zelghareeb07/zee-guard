import faraone from "./Faraone.webp";
import fr3on from "./FR3ON.webp";
import eyeOfHorus from "./GOAT (Eye of horus).webp";
import pharaonicSymbols from "./Omar (Pharaonic Symbols).webp";
import eyeOfHorusAndBastest from "./Eye of Horus & Bastest.webp";

const createDesign = (id: string, title: string, image: typeof fr3on) => ({
  id,
  title,
  subtitle: "",
  alt: `${title} mouthguard`,
  tag: `${title} mouthguard`,
  categoryId: "pharaonic",
  image,
  featured: false,
  size: "small",
});

const designs = [
  createDesign("pharaonic-fr3on", "FR3ON", fr3on),
  createDesign("pharaonic-faraone", "Faraone", faraone),
  createDesign("pharaonic-eye-of-horus", "GOAT (Eye of Horus)", eyeOfHorus),
  createDesign(
    "pharaonic-symbols",
    "Omar (Pharaonic Symbols)",
    pharaonicSymbols,
  ),
  createDesign(
    "pharaonic-eye-of-horus-and-bastest",
    "Eye of Horus & Bastest",
    eyeOfHorusAndBastest,
  ),
];

export default designs.sort((a, b) => a.title.localeCompare(b.title));
