import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("You haven't given any donations yet.");
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <p className="h-[60vh] flex justify-center items-center md:text-2xl lg:text-3xl font-bold">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 m-5">
            {isShow
              ? donation.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>

          {donation.length >= 5 && !isShow && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn btn-success my-6 px-5 block mx-auto text-xl capitalize hover:bg-green-500 hover:border-4"
            >
              See All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
