import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const venues = [
    {
      id: "pub",
      label: "Ground Floor Pub",
      logo: "/images/venue-images/pub/logos/THE MORRIS_PUB HORIZONTAL LOGO_TEAL.png",
    },
    {
      id: "cocktail-bar",
      label: "First Floor Cocktail Bar",
      logo: "/images/venue-images/cocktail-bar/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "/images/venue-images/cocktail-bar/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png", // replace with your actual background path
      }}
    >
      <Image
        src="/images/venue-images/cocktail-bar/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png" // Change this path to your actual image
        alt="The Morris Building"
        width={600}
        height={300}
        className="mb-8 rounded shadow-lg"
      />
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Welcome to The Morris
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-6">
        {venues.map(({ id, label, logo }) => (
          <Link
            key={id}
            href={`/venues/${id}`}
            className="transition duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] bg-white rounded-2xl p-6 shadow-md"
          >
            <Image
              src={logo}
              alt={label}
              width={300}
              height={150}
              className="object-contain mx-auto"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
