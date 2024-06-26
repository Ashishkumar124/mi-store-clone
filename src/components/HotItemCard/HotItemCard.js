import React from 'react';
import './HotItemCard.css';

const HotItemCard = ({ image, index, name, price }) => {
  return (
    <div className="HotItemCard">
      <img src={image} alt={`Product ${index}`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
