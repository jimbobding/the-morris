import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MATES } from "@/constants/imagePaths";

export default function MatesMorris() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24"
      style={{ backgroundColor: " #7A8F7A", color: "#F4EFE9" }}
    >
      <h2
        className="text-4xl font-bold mb-6 text-center"
        style={{ WebkitTextStroke: "1px rgba(0,0,0,0.6)" }}
      >
        Mates of Morris
      </h2>

      <p
        className="text-center max-w-2xl mb-6"
        style={{ WebkitTextStroke: "0.5px rgba(0,0,0,0.5)" }}
      >
        <p>
          Mates of Morris is a little club for our regulars and the ones who
          feel like they already are. Mates of Morris is our way of saying
          thanks — a nod to the familiar faces, the friends who bring friends,
          and the ones who make this place what it is. Members get first word on
          events, special menus, and the odd perk or two (including our Sunday
          offer). It&apos;s not a loyalty card — it&apos;s more of a handshake.
          Sign up, stay in the loop, and become a proper mate of The Morris.
          Sign up through the QR code to receive your keyring!
        </p>
      </p>

      <div className="mb-12">
        <Image
          src="/images/diamonds/DIAMOND_1_WHITE.png"
          alt="Diamond separator"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Image
          src={`${MATES}/pics/guineesScratchings.jpeg`}
          alt="Loft 1"
          width={280}
          height={100}
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src={`${MATES}/pics/guinessDrinking.jpeg`}
          width={280}
          height={100}
          alt="Loft 2"
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src={`${MATES}/pics/tableDrinks.jpeg`}
          width={280}
          height={100}
          alt="Loft 3"
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
      </div>

      <div className="mb-6">
        <Image
          src="/images/diamonds/DIAMOND_1_WHITE.png"
          alt="Diamond separator"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      <Link
        href="/menu"
        className="mt-4 inline-block bg-[#F4EFE9] text-[#7A8F7A] font-semibold py-3 px-6 rounded-lg border-2 border-[#7A8F7A] transition-colors duration-300 hover:bg-[#7A8F7A] hover:text-[#F4EFE9]"
      >
        Mates
      </Link>
    </section>
  );
}
