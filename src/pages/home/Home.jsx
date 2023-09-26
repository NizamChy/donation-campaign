import { useLoaderData } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import Banner from "../../components/header/banner/Banner";


const Home = () => {

  const cards = useLoaderData()


  return (
    <div>
      <Banner></Banner>
      <Cards cards={cards}></Cards>
    </div>
  );
};

export default Home;