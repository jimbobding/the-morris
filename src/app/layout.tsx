import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "The Morris",
  description: "Manchester venue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Absolute simplest, most reliable favicon setup */}
        <link
          rel="icon"
          href="/THE_MORRIS_PUB_HORIZONTAL_LOGO_WHITE-removebg-preview.png"
          sizes="96x96"
          type="image/png"
        />
      </head>
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  );
}
