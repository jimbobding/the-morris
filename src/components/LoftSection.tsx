"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function LoftSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<
    "IDLE" | "SENDING" | "SUCCESS" | "ERROR" | "CAPACITY_ERROR"
  >("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const data = new FormData(form);
    const guests = Number(data.get("guests"));

    // 🚫 Capacity enforcement
    if (guests > 40) {
      setStatus("CAPACITY_ERROR");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/mdkyopgd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();

        setTimeout(() => {
          setIsOpen(false);
          setStatus("IDLE");
        }, 2000);
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      console.error(err);
      setStatus("ERROR");
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24"
      style={{ backgroundColor: "#BDBDB2", color: "#000000" }}
      id="loft"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">The Loft</h2>

      <p className="text-center max-w-2xl mb-2">
        High above the buzz of Thomas Street sits our most flexible space — a
        light-filled room designed for connection, creativity and celebration.
        From brand launches and cocktail masterclasses to corporate events and
        milestone parties, The Loft transforms to fit your occasion. With
        Manchester Union on draught, bespoke drinks menus, Nell’s New York–style
        pizza and a great sound system.
      </p>

      <p className="text-center text-sm text-gray-700 mb-6">
        Capacity is limited to a maximum of 40 guests.
      </p>

      {/* Diamond divider */}
      <div className="mb-12">
        <Image
          src="/images/diamonds/DIAMOND_1_WHITE.png"
          alt="Diamond separator"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      {/* Images */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["1", "2", "3"].map((n) => (
          <Image
            key={n}
            src={`/images/venue-images/loft/pics/loft-pic-${n}.jpg`}
            alt={`Loft ${n}`}
            width={280}
            height={100}
            className="rounded-lg border border-gray-300 shadow-xl transition hover:scale-105 hover:shadow-2xl object-cover"
          />
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setStatus("IDLE");
        }}
        className="mt-4 bg-black text-[#BDBDB2] font-semibold py-3 px-6 rounded-lg transition hover:bg-[#BDBDB2] hover:text-black"
      >
        {isOpen ? "Close Form" : "Make an Enquiry"}
      </button>

      {/* Form */}
      {isOpen && (
        <div className="mt-10 w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col">
              Name
              <input name="name" required className="border p-2 rounded" />
            </label>

            <label className="flex flex-col">
              Email
              <input
                name="email"
                type="email"
                required
                className="border p-2 rounded"
              />
            </label>

            <label className="flex flex-col">
              Number of Guests (max 40)
              <input
                name="guests"
                type="number"
                min={1}
                max={40}
                required
                className="border p-2 rounded"
              />
            </label>

            {status === "CAPACITY_ERROR" && (
              <p className="text-sm text-red-600">
                Sorry — The Loft can accommodate a maximum of 40 guests.
              </p>
            )}

            <label className="flex flex-col">
              Type of Booking
              <input
                name="bookingType"
                type="text"
                maxLength={40}
                placeholder="e.g. Corporate event, Birthday, Brand launch"
                required
                className="border p-2 rounded"
              />
            </label>

            <label className="flex flex-col">
              Date of Booking
              <input
                name="date"
                type="date"
                required
                className="border p-2 rounded"
              />
            </label>

            <label className="flex flex-col">
              Time of Booking
              <input
                name="time"
                type="time"
                required
                className="border p-2 rounded"
              />
            </label>

            <label className="flex flex-col">
              Special Requests
              <textarea name="requirements" className="border p-2 rounded" />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "SENDING"}
                className="bg-black text-[#BDBDB2] font-semibold py-2 px-4 rounded transition hover:bg-[#BDBDB2] hover:text-black disabled:opacity-50"
              >
                {status === "SENDING" ? "Sending..." : "Submit Booking"}
              </button>

              {status === "SUCCESS" && (
                <span className="text-green-600 font-semibold">
                  ✅ Submitted — thanks!
                </span>
              )}
              {status === "ERROR" && (
                <span className="text-red-600 font-semibold">
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
