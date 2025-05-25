export default function CocktailBarContent({ bgImage }: { bgImage: string }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col items-center text-center "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h2 className="text-2xl font-semibold text-white">Signature Cocktails</h2>
      <p className="mt-2 text-gray-100 max-w-xl">
        Try our seasonal cocktail menu handcrafted by our mixologists.
      </p>
    </div>
  );
}
