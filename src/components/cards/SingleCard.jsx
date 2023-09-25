const SingleCard = ({card}) => {

  const {id,picture,title,category,category_bg_color,card_bg_color,text_color,description,price} = card || {}

  const cardStyle = {
    backgroundColor: card_bg_color,
    color: text_color,
  };

  const categoryBg = {
    backgroundColor: category_bg_color,
  };
  


  return (
    <div>
      <div className="relative flex max-w-[17rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="rounded-t-xl w-72 h-44"
            src={picture}
            alt="ui/ux review check"
          />
        </div>


        <div className="p-6 rounded-b-xl" style={cardStyle}>
        <button className="rounded px-2 py-1" style={categoryBg}>{category}</button>
          <h4 className="block font-sans text-[1rem] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>

        </div>

      </div>
    </div>
  );
};

export default SingleCard;
