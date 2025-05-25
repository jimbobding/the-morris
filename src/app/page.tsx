import React from "react";
import Link from "next/link";

const Home = () => {
  const venues = [
    { id: "pub", label: "Ground Floor Pub" },
    { id: "cocktail-bar", label: "First Floor Cocktail Bar" },
    { id: "venue-hire", label: "Private Hire Room" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center">
        Welcome to The Morris Appple
      </h1>
      <p className="mt-4 text-lg">This is your Home page.</p>

      <div className="p-4 w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">Welcome to The Morris</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map(({ id, label }) => (
            <div
              key={id}
              className="bg-blue-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-3">{label}</h2>
              <Link className="" href={`/venues/${id}`}>
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
