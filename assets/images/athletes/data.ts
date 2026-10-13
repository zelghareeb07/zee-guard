import abdallaMamdouh from "./Abdalla Mamdouh.webp";
import abdelrahmanYounis from "./Abdelrahman Younis.webp";
import adham from "./Adham.webp";
import alaaKichou from "./Alaa Kichou.webp";
import baher from "./Baher.webp";
import christosAndAntonis from "./Christos & Antonis.webp";
import ektoras from "./Ektoras.webp";
import hassanAwad from "./Hassan Awad.webp";
import karamGaber from "./Karam Gaber2.webp";
import khaledSalah from "./Khaled Salah.webp";
import mahmoudMoslhy from "./Mahmoud Meselhi.webp";
import mido from "./Mido.webp";
import ramadanNooman from "./Ramadan Nooman.webp";
import seifeldeenShreen from "./Seifeldeen Shreen.webp";
import tahaTarek from "./Taha Tarek.webp";
import theEagle from "./The Eagle.webp";
import wally from "./Wally.webp";
import xenos from "./Xenos.webp";
import yassinAhmed from "./Yassin Ahmed.webp";
import youssefArabawi from "./Youssef Arabawi.webp";
import zyadElgharib from "./Zyad Elgharib.webp";
import youssefBadawy from "./Youssef Badawy.webp";
import type { Athlete } from "@/types";

const createAthlete = (
  name: string,
  discipline: string,
  achievements: string[],
  img: typeof zyadElgharib,
): Athlete => ({
  name,
  discipline,
  achievements,
  img,
});

export const CHAMPIONS: Athlete[] = [
  createAthlete("Karam Gaber", "Wrestling, MMA", [
    "Olympic Wrestling Champion",
    "World Wrestling Champion",
    "MMA fighter",
  ], karamGaber),
  createAthlete("Abdalla Mamdouh", "Karate", [
    "Double World Champion",
    "3 times Grand Winner",
    "World Games Champion",
    "6 Times African Champion",
    "Head Coach of Mexican National Team",
    "No.1 in world Ranking",
  ], abdallaMamdouh),
  createAthlete("Youssef Badawy", "Karate", ["No. 1 All time world ranking.", "Three-time World Champion.", "Two-time Grand Winner.", "Three-time African Champion.", "World, African & Mediterranean Games Champion."], youssefBadawy),
  createAthlete("Youssef Arabawi", "MMA", [
    "Professional MMA fighter",
    "PFLmena Fighter",
  ], youssefArabawi),
  createAthlete("Ramadan Nooman", "MMA", [
    "Professional MMA fighter",
    "Egyptian national MMA team Coach",
  ], ramadanNooman),
  createAthlete("Zyad Elgharib", "Karate", [
    "World Ranking no.4",
    "African, Mediterranean & Arab Champion",
    "Egyptian National Karate Team",
  ], zyadElgharib),
  createAthlete("Xenos", "Karate", [
    "World Champion",
    "European & Mediterranean Champion",
    "World Ranking no. 1",
  ], xenos),
  createAthlete("Taha Tarek", "Karate", [
    "World Champion",
    "3 times Grand Winner",
    "World Games Champion",
    "African Champion",
    "No.1 in world Ranking",
  ], tahaTarek),
  createAthlete("Khaled Salah", "MMA, Kung Fu, Wrestling", [
    "Professional MMA fighter",
    "Egyptian national MMA team Coach",
    "National Wrestling Champion",
    "National Kung Fu champion",
    "MMA Head Coach",
  ], khaledSalah),
  createAthlete("Mahmoud Moslhy", "Kickboxing, MMA", [
    "Kickboxing national Champion",
    "Amateur MMA fighter",
  ], mahmoudMoslhy),
  createAthlete("Yassin Ahmed", "Karate", [
    "World Champion",
    "African Champion",
  ], yassinAhmed),
  createAthlete("Seifeldeen Shreen", "Karate", [
    "North African Champion",
    "National Karate Team player",
  ], seifeldeenShreen),
  createAthlete("Hassan Awad", "Karate", [
    "African & Mediterranean Champion",
    "Egyptian Karate National Team",
  ], hassanAwad),
  createAthlete("Abdelrahman Younis", "Karate", [
    "Qatari National Team",
  ], abdelrahmanYounis),
  createAthlete("Adham", "Karate", ["National Champion"], adham),
  createAthlete("Alaa Kichou", "Karate", ["African Champion"], alaaKichou),
  createAthlete("Baher", "MMA", ["Amateur MMA fighter"], baher),
  createAthlete("Christos & Antonis", "Karate", [
    "Mediterranean Champions",
  ], christosAndAntonis),
  createAthlete("Ektoras", "Karate", ["Mediterranean Champion"], ektoras),
  createAthlete("Mido", "MMA", ["Amateur MMA fighter"], mido),
  createAthlete("The Eagle", "MMA", ["Amateur MMA fighter"], theEagle),
  createAthlete("Wally", "MMA", [], wally),
];
