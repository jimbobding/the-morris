// src/components/Navbar/NavLinks.tsx
import Link from "next/link";

type Props = {
  onClick?: () => void;
};

export default function NavLinks({ onClick }: Props) {
  return (
    <>
      <li>
        <Link href="/" onClick={onClick}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={onClick}>
          About
        </Link>
      </li>
    </>
  );
}
