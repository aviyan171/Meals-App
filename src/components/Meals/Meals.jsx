import React from "react";
import { useGlobalContext } from "../../Context";
import "./Meals.css";
import { AiOutlineLike } from "react-icons/ai";
const Meals = () => {
  const { meals, loading, seletedMeal, handleModal, handleFavorites } =
    useGlobalContext();

  if (meals.length < 1) {
    return <h1> No meals found sorry</h1>;
  }

  if (!loading) {
    return <h2>Loading Please Wait.....</h2>;
  }

  // const { loading } = useGlobalContext();

  return (
    <section className="item-container">
      {meals.map((meals) => {
        // console.log(meals);
        const { idMeal, strMeal: title, strMealThumb: image } = meals;
        return (
          <article key={idMeal} className="single-meal">
            <img
              className="img"
              src={image}
              alt="meals"
              onClick={() => handleModal(idMeal)}
            />
            <div className="par-containers">
              <p className="item-name">{title}</p>
              <div className="like-container">
                <AiOutlineLike
                  className="like-icon"
                  onClick={() => handleFavorites(idMeal)}
                />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
