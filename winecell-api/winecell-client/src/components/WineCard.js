import React from 'react';
import { Link } from "react-router-dom";
const WineCard = ({wine}) => (
    <div key={wine.id} className="WineCard">
   
    <h2 id="wineName">{wine.name}</h2>
    <img className="WineImage" src={wine.image} alt={wine.name} />
    <br />
    <br />
    <h3> Wine type: {wine.wine_type} </h3>

    <br />
   <Link to={{pathname: `/wines/${wine.id}`, state: {wine: wine.id}}}>View Wine</Link>
   </div>


)

export default WineCard;