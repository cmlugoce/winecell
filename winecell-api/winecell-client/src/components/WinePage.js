import React from "react";
import { connect } from "react-redux"; 
import {deleteWine} from '../actions/wines';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Divider, Image, Button } from 'semantic-ui-react'


class WinePage extends React.Component {
  deleteClick = (event) => {
    event.preventDefault()
    this.props.deleteWine(this.props.wine.id)
   .then(this.props.history.push('/wines'))
} 
   render(){
    return (
      <section className="hero is-light is-fullheight is-bold">
      <div className="hero-head">
          <br />
          <br />
          <br />
          <br />
          
          <center>
          <Divider hidden className='wine-show-image' />
           <Image src={this.props.wine.image} size='medium'  bordered />
           </center>
           
           <br />
           <div id='wine-info'>
            <h2 className = "active-wine_name"><strong>{this.props.wine.name}</strong></h2>
            <h3><strong>Wine type:</strong> {this.props.wine.wine_type}</h3>
            <h3><strong> Year:</strong> {this.props.wine.year} </h3>
            <h3><strong> Description: </strong> {this.props.wine.description} </h3>
            <h3><strong> Price:</strong> ${this.props.wine.price} </h3>
            </div>
            <br></br>
            
                
                <Link to="/wines">
                <Button basic color='violet' content='All Wines' /> 
               
                </Link>
                <Button basic color='red' content='DELETE' onClick={this.deleteClick} value='delete'/>

      </div>
      </section> 
  );
};
}

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

export default connect(mapStateToProps, {deleteWine})(WinePage);