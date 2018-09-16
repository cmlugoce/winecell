import React, {Component} from 'react';
import {connect} from 'react-redux';
import WineCard from "../components/WineCard";
//import WineForm from "../containers/WineForm";
import { getWines } from '../actions/wines';
import './Wines.css';

  class Wines extends Component {

    componentDidMount() {
     this.props.getWines()
  }
      render() {
       return (
         <div className="WinesContainer">
       <h1> Wines </h1>
       {this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} />)}     
       {this.props.children}
       </div>
    );  

 }
}


const mapStateToProps = (state) => {

  return ({

    wines: state.wines
  })
}

export default connect (mapStateToProps, {getWines}) (Wines);
