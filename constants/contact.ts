import { ContactMethod, LabLocation } from "@/types";

export const WHATSAPP_NUMBER = "01290032113";
export const WHATSAPP_INTERNATIONAL_NUMBER = `20${WHATSAPP_NUMBER.slice(1)}`;
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_INTERNATIONAL_NUMBER}`;

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: "instagram",
    title: "Instagram",
    description: "Join the elite rank. Tag us in your training.",
    actionLabel: "Message us @ZeeGuard",
    href: "https://instagram.com/zeeguard",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp",
    description: "Real-time support for custom fitting questions.",
    actionLabel: "Chat with the Lab",
    href: WHATSAPP_LINK,
  },
  {
    icon: "facebook",
    title: "Facebook",
    description: "Connect with us and follow our latest updates.",
    actionLabel: "Visit our Facebook",
    href: "https://www.facebook.com/profile.php?id=61579043641115",
  },
];

export const LAB_LOCATIONS: LabLocation[] = [
  {
    name: "Dental Hub Center",
    address: ["11 Ibn Hokal st", "Zezenia, Alexandria"],
    mapsUrl: "https://maps.app.goo.gl/TDHqQRjTXxucbUNy8",
  },
  {
    name: "Hamouda Clinic",
    address: ["274 Malak Hifny Bahary st", "Emam Huda El Eslam, Sidi Bishr, Alexandria"],
    mapsUrl: "https://maps.app.goo.gl/ZKAkgme6MNKdrXew8",
  },
  {
    name: "1,2,3 Smile",
    address: ["Town Center Mall", "Al Sherouk City, Cairo"],
    mapsUrl: "https://maps.app.goo.gl/3y5YYYXHicnxyyam6",
  },
  {
    name: "My Child Medical Center",
    address: ["7th Garanada st", "El-Montaza, Heliopolis, Cairo"],
    mapsUrl: "https://maps.app.goo.gl/cn7kPuSSRZRnj99d7",
  },
  {
    name: "The Paramount Clinic",
    address: ["49 Misr Helwan Agriculture Rd", "Maadi Al Khabiri Al Gharbeyah, Maadi, Cairo"],
    mapsUrl: "https://maps.app.goo.gl/yuqGgtpRVvrbUuRSA",
  },
  {
    name: "Elsawi Dental Clinic",
    address: ["Al Nakhil Center 2, Street 4", "11th District, 6th of October City, Giza"],
    mapsUrl: "https://maps.app.goo.gl/1uYXGRQ1ARKv7tUA8",
  },
];
