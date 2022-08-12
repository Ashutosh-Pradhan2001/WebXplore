import React, { useState } from "react";
import "./cart.css";
// import HoverVideo from "./HoverVideo";
const Cart = ({ movie }) => {
  const [showHover, setShowHover] = useState(false);
  return (
    <div>
      <div
        className="card"
        onMouseEnter={() => setShowHover(true)}
        onMouseLeave={() => setShowHover(false)}
      >
        <img src={movie.image} alt="image not found" className="card__img" />
        <div className="card__info">
          <span className="card__category">A Netflix Original Series</span>
          <h3 className="card__title">{movie.title}</h3>
          <a href={movie.link} target="_blank">
            <button className="play_btn">Watch Now</button>
          </a>
        </div>
      </div>
      {/* <div className="hovervideo_container">{showHover && <HoverVideo />}</div> */}
    </div>
  );
};

export default Cart;
