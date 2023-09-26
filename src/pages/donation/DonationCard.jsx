import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
  const {id,picture,title,category,category_bg_color,card_bg_color,text_color,description,price} = card || {};

  
  const cardBackground = {
    backgroundColor: card_bg_color,
    
  };
  const cardStyle = {
    backgroundColor: card_bg_color,
    color: text_color,
  };
  const btnStyle = {
    backgroundColor: text_color,
    
  };

  const categoryBg = {
    backgroundColor: category_bg_color,
    color: text_color,
  };

  const priceColor = {
    color: text_color,
  };

  return (
    <div>
      <div style={cardBackground} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
        <div className="rounded-b-xl">
        <button className="rounded px-2 py-1" style={categoryBg}>{category}</button>

        </div>


          <h4 className="mt-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
          </h4>

          
          <h2 className="text-2xl font-semibold py-1" style={priceColor}>${price}</h2>

          <Link to={`/cards/${id}`}>
          <button
            className="text-white font-semibold py-2 px-4 rounded mt-2 btn"
            style={btnStyle}
          >
            View Details
          </button>
          </Link>
          
        </div>
      </div>

    </div>
  );
};

export default DonationCard;
