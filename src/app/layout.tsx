// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
  secondaryColor = "#FF9B7A",
  textColor = "#FFFFFF",
}: {
  children: React.ReactNode;
  secondaryColor?: string;
  textColor?: string;
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <Navbar
          bgColor={secondaryColor}
          textColor={textColor}
          borderColor={secondaryColor}
        />
        <main>{children}</main>
        <Footer
          bgColor={secondaryColor}
          textColor={textColor}
          borderColor={secondaryColor}
        />
      </body>
    </html>
  );
}
