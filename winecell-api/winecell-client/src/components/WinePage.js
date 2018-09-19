import React from "react";
import { connect } from "react-redux"; 
//import {loadWine} from '../actions/wines';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Divider, Image, Button } from 'semantic-ui-react'


const WinePage = ({ wine }) => {
    return (
      <section className="hero is-light is-fullheight is-bold">
      <div className="hero-head">
          <br />
          <br />
          <br />
          <br />
          
          <center>
          <Divider hidden className='wine-show-image' />
           <Image src={wine.image} size='medium'  bordered />
           </center>
           
           <br />
           <div id='wine-info'>
            <h2 className = "active-wine_name"><strong>{wine.name}</strong></h2>
            <h3><strong>Wine type:</strong> {wine.wine_type}</h3>
            <h3><strong> Year:</strong> {wine.year} </h3>
            <h3><strong> Description: </strong> {wine.description} </h3>
            <h3><strong> Price:</strong> ${wine.price} </h3>
            </div>
            <br></br>
            
                
                <Link to="/wines">
                <Button basic color='violet' content='All Wines' /> 
               
                </Link>
          
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