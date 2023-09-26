const Banner = () => {
  return (
    // <div className="h-[70vh] bg-green-400">

    // </div>

    <div className="">
      <div
        className="hero h-[70vh]"
        style={{ backgroundImage: "url(https://i.ibb.co/XSNnfqX/banner.jpg)" }}
      >
        <div
          className="hero-overlay bg-opacity-40"
          style={{ filter: "brightness(2.5)" }}
        ></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>

            {/* search bar */}
            <div className="relative max-w-sm mx-auto mt-20">
              <input
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="search"
                placeholder="Search here...."
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-[#FF444A] border border-gray-300 rounded-r-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                Search
              </button>
            </div>

            {/* search bar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
