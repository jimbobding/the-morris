// src/components/Navbar/HamburgerButton.tsx
type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export default function HamburgerButton({ isOpen, toggle }: Props) {
  return (
    <button className="md:hidden" onClick={toggle} aria-label="Toggle Menu">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />
        )}
      </svg>
    </button>
  );
}
