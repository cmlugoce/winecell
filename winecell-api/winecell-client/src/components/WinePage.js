import React from "react";
import { connect } from "react-redux"; 
//import {loadWine} from '../actions/wines';
//import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';


const WinePage = ({ wine }) => {
    return (
      <section class="hero is-light is-fullheight is-bold">
      <div class="hero-head">
          <br />
      <div class="hero-body">
        <div class="box">
        <article class="media">
        <div class="media-left">
          <figure class="image is-100x100">
            <img src={wine.image} alt="" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{wine.name}</strong>
              <br />
             
            </p>
          </div>
        </div>
      </article>
      </div>
      </div>
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