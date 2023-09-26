import swal from "sweetalert";

const CardDesign = ({ card }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
    description,
    price,
  } = card || {};

  const handleAddToDonation = () => {
    const addedDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (!donationItems) {
      addedDonationArray.push(card);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      swal("Donation successful.", "Thank you!", "success");
    } else {
      const isExist = donationItems.find((card) => card.id == id);

      if (!isExist) {
        addedDonationArray.push(...donationItems, card);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        swal("Donation successful.", "Thank you!", "success");
      } else {
        swal("Already donated!", "Thank you!", "info");
      }
    }
  };

  const cardStyle = {
    backgroundColor: text_color,
  };

  return (
    <div className="m-5">
      <div className="relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="relative">
          <img
            className="w-full h-80 object-cover object-center rounded-b-md"
            src={picture}
            alt="Image Alt Text"
          />
          
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gray-900 opacity-40 rounded-b-md"></div>
        </div>
        <div className="absolute bottom-[31%] left-8 my-6 md:my-0">
          <button
            onClick={handleAddToDonation}
            className=" text-white font-semibold py-2 px-4 rounded"
            style={cardStyle}
          >
            Donate ${price}
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
