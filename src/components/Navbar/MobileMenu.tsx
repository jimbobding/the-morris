// src/components/Navbar/MobileMenu.tsx
import NavLinks from "./NavLinks";

type Props = {
  close: () => void;
};

export default function MobileMenu({ close }: Props) {
  return (
    <ul className="md:hidden mt-3 space-y-2 text-sm">
      <NavLinks onClick={close} />
    </ul>
  );
}
