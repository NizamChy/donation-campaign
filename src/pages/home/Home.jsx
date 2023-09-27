import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import Banner from "../../components/header/banner/Banner";
import { useLocation } from "react-router-dom";
import Footer from "../../layout/Footer";

const Home = () => {
  const initialCards = useLoaderData();
  const [filteredCards, setFilteredCards] = useState(initialCards);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const location = useLocation();

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCards(initialCards);
    } else {
      const filtered = initialCards.filter((card) =>
        card.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(filtered);
    }

    setSearchPerformed(true);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setFilteredCards(initialCards);
      setSearchPerformed(false);
    }
  }, [location.pathname, initialCards]);

  const cardsToRender = searchPerformed ? filteredCards : initialCards;

  return (
    <div>
      <Banner onSearch={handleSearch} />
      <Cards cards={cardsToRender} />
      <Footer></Footer>
    </div>
  );
};

export default Home;
