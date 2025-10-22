type FooterProps = {
  bgColor?: string;
  textColor?: string;
};

export default function Footer({ bgColor, textColor }: FooterProps) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const venueSlug =
    segments[1] === "venues"
      ? (segments[2] as keyof typeof venueData)
      : "default";

  const venue = venueData[venueSlug] || venueData.default;

  const bg = bgColor || venue.footBgColor || venue.backgroundColor || "#111111";
  const text = textColor || venue.textColor || "#FFFFFF";
  const accent = venue.hoverColor || venue.borderColor || "#FFB6C1";

  return (
    <footer
      className="p-4 text-center space-y-2 transition-all duration-500 border-t-2"
      style={{ backgroundColor: bg, color: text, borderTopColor: accent }}
    >
      <p className="text-sm">&copy; 2025 The Morris. All rights reserved.</p>
      <p className="text-sm">
        Visit our sister venue{" "}
        <a
          href="https://www.blinkerbar.co.uk/"
          className="inline-block px-4 py-2 border-b-2 border-transparent transition-all duration-300 hover:border-b-[var(--accent-color)]"
          style={
            { color: accent, "--accent-color": accent } as React.CSSProperties
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          BLINKER
        </a>
      </p>
    </footer>
  );
}
