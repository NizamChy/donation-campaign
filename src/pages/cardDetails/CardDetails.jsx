import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDesign from "./CardDesign";

const CardDetails = () => {
  const [card, setCard] = useState({});

  const { id } = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards?.find((card) => card.id == id);

    setCard(findCard);
  }, [id, cards]);

  return <div>

    <CardDesign card={card}></CardDesign>

  </div>;
};

export default CardDetails;
