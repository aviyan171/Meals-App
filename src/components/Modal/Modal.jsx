import React from "react";
import "./Modal.css";
import { useGlobalContext } from "../../Context";

const Modal = () => {
  const { seletedMeal, CloseModal } = useGlobalContext();

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = seletedMeal;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instruction</p>
          <p>{text}</p>
          <a href={source} target="_blank">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={CloseModal}>
            close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;