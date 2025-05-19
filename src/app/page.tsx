// src/app/page.tsx

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center">
        Welcome to The Morris App
      </h1>
      <p className="mt-4 text-lg">This is your Home page.</p>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Welcome to The Morris</h1>

        {/* Main Grid: 3 columns on large screens, 2 columns on medium screens, 1 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Venue 1: Pub */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3">Ground Floor Pub</h2>
            <Link href="/venues/pub" className="text-blue-500 hover:underline">
              Explore the Pub
            </Link>
          </div>

          {/* Venue 2: Cocktail Bar */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3">
              First Floor Cocktail Bar
            </h2>
            <Link
              href="/venues/cocktail-bar"
              className="text-blue-500 hover:underline"
            >
              Explore cocktail bar
            </Link>
          </div>

          {/* Venue 3: Private Hire Room */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3">Private Hire Room</h2>
            <Link
              href="/venues/venue-hire"
              className="text-blue-500 hover:underline"
            >
              Hire our venue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
