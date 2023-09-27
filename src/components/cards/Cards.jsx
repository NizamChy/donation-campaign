import SingleCard from "./singleCard";


// eslint-disable-next-line react/prop-types
const Cards = ({cards}) => {
  return (
    <div className="py-10 flex justify-center">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
        {
          // eslint-disable-next-line react/prop-types
          cards?.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
        }
      </div>
    </div>
  );
};

export default Cards;