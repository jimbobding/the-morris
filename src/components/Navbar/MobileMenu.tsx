"use client";

import NavLinks from "./NavLinks";

type Props = {
  close: () => void;
};

export default function MobileMenu({ close }: Props) {
  return (
    <div className="md:hidden bg-black w-full fixed top-16 left-0 z-40">
      <ul className="flex flex-col items-center justify-center space-y-6 py-6">
        <NavLinks
          targetSlug="default" // or pass the current venue slug if you have it
          textColor="#fff"
          onClick={close} // closes menu on link click
        />
      </ul>
    </div>
  );
}
