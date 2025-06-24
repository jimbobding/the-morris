import React from "react";

type ContactInfoProps = {
  phone: string;
  email: string;
};

export default function ContactInfo({ phone, email }: ContactInfoProps) {
  return (
    <section className="bg-gray-100 text-black py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="space-y-4 text-lg">
          <p>📍 123 Venue Street, London, UK</p>
          <p>
            📞{" "}
            <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
              {phone}
            </a>
          </p>
          <p>
            ✉️{" "}
            <a
              href={`mailto:${email}`}
              className="text-blue-600 hover:underline"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
