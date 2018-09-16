import React from 'react';
import { Link } from "react-router-dom";
const WineCard = ({wine}) => (
    <div key={wine.id} className="WineCard">
   
    <h2 id="wineName">{wine.name}</h2>
   <p> Description: {wine.description} </p>
   <p> Wine type: {wine.wine_type} </p>
   <p> Year: {wine.year} </p>
   <img className="WineImage" src={wine.image} alt={wine.name} />
   <p> Price:  ${wine.price} </p>
  
 
   <Link to={{pathname: `/wines/${wine.id}`, state: {wine: wine.id}}}>View Wine</Link>
   </div>


)

export default WineCard;