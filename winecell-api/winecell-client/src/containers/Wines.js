import React, {Component} from 'react';
import {connect} from 'react-redux';
import WineCard from "../components/WineCard";
import { getWines } from '../actions/wines';
import {Button} from 'semantic-ui-react';

import './Wines.css';




  class Wines extends Component {

    constructor(props) {
      super(props)
   
  }
    

    componentDidMount() {
     this.props.getWines()
  }
  sortByMaxLikes = () => {
    //alert('click')
    //const  wines =this.props.wines;
   
   // console.log(wines)
    const sortedWines = Object.assign({}, this.props.wines, 
    this.props.wines.sort(function(a, b) {
        return b.likes - a.likes;
        
        
      })
    )
   
     this.setState({
      wines: sortedWines
  })
}
  
  
  
      render() {
       
       return (
         <div className="WinesContainer">
        <br />
        <Button inverted color='yellow' onClick={this.sortByMaxLikes} content='Sort by Max Likes' />  
       <br />
       {this.props.wines.map(wine => <WineCard key={wine.id} wine={wine}  />)}   
     
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
