import React from "react";
import "./Favorites.css";
import Meals1 from "../../assets/Meals1.jpg";
import Meals2 from "../../assets/Meals2.jpg";
import { useGlobalContext } from "../../Context";

const Favorites = () => {
  const { favorites, handleModal, handleremove } = useGlobalContext();

  return (
    <section className="fav-container">
      <p className="Favorite">Favorites</p>
      <div className="img-container">
        {favorites.map((item) => {
          return (
            <div key={item.idMeal}>
              <img
                className="fav-img"
                src={item.strMealThumb}
                onClick={() => handleModal(item.idMeal, true)}
              />
              <button
                className="remove-btn"
                onClick={() => handleremove(item.idMeal)}
              >
                {" "}
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favorites;
