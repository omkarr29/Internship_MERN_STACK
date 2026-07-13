import React, { useState } from "react";
import "./UseEffect.css";

const UseEffect = () => {
  const bookTitle = "Ikigai";
  const originalPrice = 500;

  const [price, setPrice] = useState(originalPrice);
  const [qn, setQn] = useState(1);

  const increaseQuantity = () => {
    const newQn = qn + 1;
    setQn(newQn);
    setPrice(originalPrice * newQn);
  };

  const decreaseQuantity = () => {
    if (qn > 1) {
      const newQn = qn - 1;
      setQn(newQn);
      setPrice(originalPrice * newQn);
    }
  };

  return (
    <div className="container">
      <h1>Book 
         </h1>

      <h2>{bookTitle}</h2>

      <h3>Quantity : {qn}</h3>

      <h3>Total Price : ₹{price}</h3>

      <div className="buttons">
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};

export default UseEffect;