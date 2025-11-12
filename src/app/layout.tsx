import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Morris",
  description: "Manchester venue",
  icons: {
    icon: [{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* fallback just in case metadata doesn’t render favicon */}
        <link
          rel="icon"
          href="/favicon-96x96.png"
          type="image/png"
          sizes="96x96"
        />
      </head>
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  );
}
