import React from 'react';
import { Link } from "react-router-dom";

const WineCard = ({wine}) => (
    <div key={wine.id} className="WineCard">
   
    
    <img className="WineImage" src={wine.image} alt={wine.name} />
    
    <br />
    <br />
    <h1 id="wineName"><strong>{wine.name}</strong></h1>
    <h3> Wine type: {wine.wine_type} </h3>

    <br />
   <Link to={{pathname: `/wines/${wine.id}`, state: {wine: wine.id}}}>View Wine</Link>
   </div>


)

export default WineCard;