// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Hanken_Grotesk } from "next/font/google";
import Footer from "../components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // choose weights you need
  style: ["normal", "italic"], // optional, if you want italics
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
