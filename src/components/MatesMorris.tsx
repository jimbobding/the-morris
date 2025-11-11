"use client";

import React, { useState } from "react";
import Image from "next/image";

import { MATES } from "@/constants/imagePaths";

export default function MatesMorris() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<
    null | "IDLE" | "SENDING" | "SUCCESS" | "ERROR"
  >("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mldaenpy", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();

        // Auto-close form after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          setStatus("IDLE");
        }, 2000);
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24"
      style={{ backgroundColor: "#7A8F7A", color: "#F4EFE9" }}
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
        Mates of Morris is a little club for our regulars and the ones who feel
        like they already are. Mates of Morris is our way of saying thanks — a
        nod to the familiar faces, the friends who bring friends, and the ones
        who make this place what it is. Members get first word on events,
        special menus, and the odd perk or two (including our Sunday offer).
        It&apos;s not a loyalty card — it&apos;s more of a handshake. Sign up,
        stay in the loop, and become a proper mate of The Morris.
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
          alt="Scratchings and Guinness"
          width={280}
          height={100}
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src={`${MATES}/pics/guinessDrinking.jpeg`}
          width={280}
          height={100}
          alt="Friends drinking Guinness"
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src={`${MATES}/pics/tableDrinks.jpeg`}
          width={280}
          height={100}
          alt="Drinks on the table"
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

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setStatus("IDLE");
        }}
        className="mt-4 inline-block bg-[#F4EFE9] text-[#7A8F7A] font-semibold py-3 px-6 rounded-lg border-2 border-[#7A8F7A] transition-colors duration-300 hover:bg-[#7A8F7A] hover:text-[#F4EFE9]"
      >
        {isOpen ? "Close Form" : "Join the Mates Club"}
      </button>

      {isOpen && (
        <div className="mt-10 w-full max-w-lg bg-[#7A8F7A] text-[#F4EFE9] p-6 rounded-lg shadow-lg border border-[#F4EFE9]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            <label className="flex flex-col">
              Name
              <input
                name="name"
                required
                className="border border-[#F4EFE9] bg-transparent text-[#F4EFE9] p-2 rounded placeholder-[#F4EFE9]"
                placeholder="Your name"
              />
            </label>

            <label className="flex flex-col">
              Phone Number
              <input
                name="phone"
                type="tel"
                required
                className="border border-[#F4EFE9] bg-transparent text-[#F4EFE9] p-2 rounded placeholder-[#F4EFE9]"
                placeholder="Your number"
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "SENDING"}
                className="bg-[#F4EFE9] text-[#7A8F7A] font-semibold py-2 px-4 rounded hover:bg-[#7A8F7A] hover:text-[#F4EFE9] border border-[#F4EFE9] transition disabled:opacity-50"
              >
                {status === "SENDING" ? "Sending..." : "Submit"}
              </button>

              {status === "SUCCESS" && (
                <span className="text-[#F4EFE9] font-semibold">
                  ✅ Sent — cheers mate!
                </span>
              )}
              {status === "ERROR" && (
                <span className="text-red-300 font-semibold">
                  ❌ Error — please try again
                </span>
              )}
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
