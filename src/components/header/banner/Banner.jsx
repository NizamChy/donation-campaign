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
          className="hero-overlay bg-opacity-60"
          style={{ filter: "brightness(2.5)" }}
        ></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl font-semibold text-black">
              I Grow By Helping People In Need
            </h1>

            {/* search bar */}
            <div className="mb-3">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border-2 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#FF444A;] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-[#FF444A;]"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                <button
                  className="relative z-[2] flex items-center rounded-r bg-[#FF444A;] px-6 py-2.5 text-s font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-[#FF444A;]-700 hover:shadow-lg focus:bg-[#FF444A;]-700 focus:shadow-lg focus:outline-none focus:ring-4 active:bg-[#FF444A;]-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Search
                </button>
              </div>
            </div>
            {/* search bar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
