import React from "react";

type OpeningHoursSectionProps = {
  hours: string;
};

export default function OpeningHoursSection({
  hours,
}: OpeningHoursSectionProps) {
  if (!hours) return null;

  return (
    <section className="bg-white text-black py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Opening Hours</h2>
        <p className="text-lg">{hours}</p>
      </div>
    </section>
  );
}
