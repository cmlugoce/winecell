import React from 'react';

const WineCard = ({wine}) => (
    <div key={wine.id} className="WineCard">
    <h3>{wine.name}</h3>
   <p> Description: {wine.description} </p>
   <p> Wine type: {wine.wine_type} </p>
   <p> Year: {wine.year} </p>
   <img className="WineImage" src={wine.image} alt={wine.name} />
   <p> Price:  ${wine.price} </p>
   </div>


)

export default WineCard;