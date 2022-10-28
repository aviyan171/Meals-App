import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const getItems = () => {
  const getitem = localStorage.getItem("favorites");
  return JSON.parse(getitem);
};

export function useGlobalContext() {
  return useContext(AppContext);
}

const singleRandomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchMeal, setSearchMeal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [seletedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getItems() || []);

  const fetchMeal = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      data.meals ? setMeals(data.meals) : setMeals([]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal(allMealsUrl);
  }, []);

  useEffect(() => {
    if (!searchMeal) return;
    fetchMeal(`${allMealsUrl}${searchMeal}`);
  }, [searchMeal]);

  const fetchRandomMeals = async () => {
    const { data } = await axios(singleRandomMeal);
    setMeals(data.meals);
  };

  const handleModal = (id, favoriteMeal) => {
    let findmeal;
    if (favoriteMeal) {
      findmeal = favorites.find((item) => item.idMeal === id);
    } else {
      findmeal = meals.find((item) => {
        return item.idMeal === id;
      });
    }
    setSelectedMeal(findmeal);
    setShowModal(true);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  const handleFavorites = (id) => {
    let favmeal = meals.find((item) => {
      return item.idMeal === id;
    });
    const alreadyfav = favorites.find((item) => item.idMeal === id);
    if (alreadyfav) return;
    const updatedfav = [...favorites, favmeal];
    setFavorites(updatedfav);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleremove = (id) => {
    const deletefav = favorites.filter((item) => item.idMeal !== id);
    setFavorites(deletefav);
  };

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        searchMeal,
        setSearchMeal,
        fetchRandomMeals,
        showModal,
        seletedMeal,
        handleModal,
        CloseModal,
        handleFavorites,
        favorites,
        handleremove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
