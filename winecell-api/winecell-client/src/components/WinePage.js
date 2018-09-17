import React from "react";
import { connect } from "react-redux"; 
//import {loadWine} from '../actions/wines';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Divider, Image } from 'semantic-ui-react'


const WinePage = ({ wine }) => {
    return (
      <section className="hero is-light is-fullheight is-bold">
      <div class="hero-head">
          <br />
          <br />
          <br />
          <br />
          <center>
          <Divider hidden />
           <Image src={wine.image} size='medium'  bordered />
           </center>
            <h2 className = "active-wine_name">{wine.name}</h2>
            <h3>Wine type: {wine.wine_type}</h3>
            <h3> Year: {wine.year} </h3>
            <h3> Description: {wine.description} </h3>
            <h3> Price: ${wine.price} </h3>

            <br></br>
            
                
                <Link to="/wines">All Wines </Link>
          
      </div>
      </section> 
  );
};

const mapStateToProps = (state, ownProps) => {
  const wine = state.wines.find(
    wine => String(wine.id) === ownProps.match.params.id
  );
  if (wine) {
    return { wine: wine };
  } else {
    return { wine: {} };
  }
};

export default connect(mapStateToProps)(WinePage);