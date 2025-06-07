// CocktailBarContent.tsx
import React from "react";

interface Props {
  cpImage: string;
}

const CocktailBarContent: React.FC<Props> = ({ cpImage }) => {
  console.log("cpImage URL:", cpImage); // Check if this logs correctly

  return (
    <>
      <div
        className="w-full h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url("${cpImage}")` }}
      >
        <h2 className="text-3xl font-bold">Cocktail Bar Feature Section</h2>
      </div>
    </>
  );
};

export default CocktailBarContent;
