import Image from "next/image";

type VenueContactData = {
  phone: string;
  email: string;
  contactBackgroundImage?: string;
};

type ContactInfoSectionProps = {
  contact: VenueContactData;
  borderColor?: string;
};

export default function ContactInfoSection({
  contact,
  borderColor = "#ffe680",
}: ContactInfoSectionProps) {
  const { phone, email, contactBackgroundImage } = contact;

  return (
    <section className="relative min-h-[60vh] px-6 py-20 flex items-center justify-center">
      {contactBackgroundImage && (
        <>
          <Image
            src={contactBackgroundImage}
            alt="Contact background"
            fill
            className="object-cover object-center -z-10"
            quality={80}
            priority
          />
          <div className="absolute inset-0 bg-black/50 -z-10" />
        </>
      )}

      <div
        className="relative bg-black/70 border-4 rounded-3xl p-10 text-center shadow-lg w-full max-w-xl"
        style={{ borderColor }}
      >
        <h3
          className="text-4xl font-bold mb-8 text-[#ffe680] tracking-wide"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          Contact Us
        </h3>

        <p className="text-xl mb-4 text-[#fff9e6]">
          📞{" "}
          <a
            href={`tel:${phone}`}
            className="underline hover:text-[#fff] transition-colors"
          >
            {phone}
          </a>
        </p>

        <p className="text-xl text-[#fff9e6]">
          📧{" "}
          <a
            href={`mailto:${email}`}
            className="underline hover:text-[#fff] transition-colors"
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}
