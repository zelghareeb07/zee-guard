import { StatItem, Testimonial } from "@/types";

export { CHAMPIONS } from "@/assets/images/athletes/data";

export const ATHLETE_STATS: StatItem[] = [
  { value: 50, label: "National Team champions" },
  { value: 50, label: "Worldwide champions" },
  { value: 100, label: "Professional Grade Rating", isPercent: true },
];

export const ATHLETE_TESTIMONIALS: Testimonial[] = [
  {
    name: "@joshua_mma",
    role: "Amateur MMA Fighter",
    rating: 5,
    quote:
      "Got my custom mold in last week. Fitted perfectly on the first try. Took a solid upper cut in sparring yesterday and barely felt it in the jaw. Legit.",
  },
  {
    name: "Amanda R.",
    role: "Best Investment for BJJ",
    rating: 5,
    verified: true,
    quote:
      "I've gone through cheap boil-and-bites for years, always gagging or struggling to breathe while rolling. The ZeeGuard custom fit is night and day. It clicks into place, stays there, and I can actually drink water without popping it out. Worth every penny if you take your sport seriously.",
  },
  {
    name: "Mike T.",
    role: "Kickboxing Coach",
    rating: 4,
    quote:
      "The design process was awesome. Love the gold fangs I got added. Guard is super tough but low profile.",
  },
];
