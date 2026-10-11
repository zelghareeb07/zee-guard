import emergency123 from "./123 Emergency.webp";
import bloodyTeeth from "./Bloody Teeth.webp";
import gazzar from "./Gazzar.webp";
import lucifer from "./Lucifer.webp";
import rip from "./RIP.webp";
import rocky from "./ROCKY.webp";
import shhh from "./Shhh.webp";
import symbioticIdentity from "./Symbiotic Identity.webp";
import temsa7 from "./TEMSA7.webp";
import vicious from "./Vicious.webp";

const createDesign = (id: string, title: string, image: typeof emergency123) => ({
  id,
  title,
  subtitle: "",
  alt: `${title} mouthguard`,
  tag: `${title} mouthguard`,
  categoryId: "bloody",
  image,
  featured: false,
  size: "small",
});

const designs = [
  createDesign("bloody-1", "123 Emergency", emergency123),
  createDesign("bloody-2", "Bloody Teeth", bloodyTeeth),
  createDesign("bloody-3", "Gazzar", gazzar),
  createDesign("bloody-4", "Lucifer", lucifer),
  createDesign("bloody-5", "RIP", rip),
  createDesign("bloody-6", "ROCKY", rocky),
  createDesign("bloody-7", "Shhh!", shhh),
  createDesign("bloody-8", "Symbiotic Identity", symbioticIdentity),
  createDesign("bloody-9", "TEMSA7", temsa7),
  createDesign("bloody-10", "Vicious", vicious),
];

export default designs.sort((a, b) => a.title.localeCompare(b.title));
