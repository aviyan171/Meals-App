import React, { useState } from "react";
import "./Search.css";
import { useGlobalContext } from "../../Context";

const Search = () => {
  const { setSearchMeal, fetchRandomMeals } = useGlobalContext();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const searchMeals = () => {
    if (input) {
      setSearchMeal(input);
      setInput("");
    }
  };

  const supriseMeal = () => {
    setSearchMeal("");
    setInput("");
    fetchRandomMeals();
  };

  return (
    <div className="Search-Container">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="type your favorite meal"
        />
        <div className="btn-container">
          <button className="Search-button" onClick={searchMeals}>
            Search
          </button>
          <button className="Surprise-button" onClick={supriseMeal}>
            Suprise Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
