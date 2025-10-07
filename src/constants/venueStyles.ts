// constants/venueStyles.ts
import { Dancing_Script, Hanken_Grotesk } from "next/font/google";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });
const hanken = Hanken_Grotesk({ weight: "400", subsets: ["latin"] });

export const venueStyles = {
  pub: {
    borderColor: "#FFFDD0",
    fontClass: hanken.className,
    navLinkClass: "after:bg-[#FFFDD0] hover:text-[#FFFDD0]",
  },
  "cocktail-bar": {
    borderColor: "#e1ad01",
    fontClass: hanken.className,
    navLinkClass: "after:bg-[#e1ad01] hover:text-[#e1ad01]",
  },
  "private-hire": {
    borderColor: "#00CED1",
    fontClass: hanken.className,
    navLinkClass: "after:bg-[#00CED1] hover:text-[#00CED1]",
  },
  default: {
    borderColor: "#98FF98",
    fontClass: hanken.className,
    navLinkClass: "after:bg-[#98FF98] hover:text-[#98FF98]",
  },
};
