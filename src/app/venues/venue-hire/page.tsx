const VenueHire = () => {
  return (
    <>
      <h1 className="text-3xl font-bold pt-10 pb-6 px-4">Venue Hire</h1>

      <div className="px-4 pb-10 grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded">Col 1</div>
        <div className="bg-gray-100 p-4 rounded">
          <img
            src="/images/venue-images/pub-images/THE MORRIS_PUB HORIZONTAL LOGO_TEAL (1).jpg"
            alt="Pub"
            className="w-full h-48 "
          />
        </div>
      </div>
    </>
  );
};

export default VenueHire;
