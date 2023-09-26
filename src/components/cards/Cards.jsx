import SingleCard from "./singleCard";


const Cards = ({cards}) => {
  return (
    <div className="py-10 flex justify-center">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
        {
          cards?.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
        }
      </div>
    </div>
  );
};

export default Cards;