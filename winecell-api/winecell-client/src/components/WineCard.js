import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addLike} from '../actions/wines';
import {deleteWine} from '../actions/wines';
import { Link } from "react-router-dom";
import {  Button, Icon } from 'semantic-ui-react'


class WineCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentlyDisplayed: this.props.wine,
            
            
          }
    }

   // componentWillMount(){
       // this.props.getWines()
     // }
     
     

      componentDidMount() {
        this.setState({
           currentlyDisplayed: this.props.wine
         })
          
      }

  
     

    handleClick = (event) => {
        event.preventDefault()
        //let wine = this.props.wines.find(function(wine){return (wine.id).toString() === event.target.value})
       this.props.addLike(this.props.wine)
      }

     
      
      

  
  

     render() {
      
         return (

            

    <div key={this.props.wine.id} className="WineCard">
   
    <img className="WineImage" src={this.props.wine.image} alt={this.props.wine.name} />
    
    <br />
    <br />
    <h1 id="wineName"><strong>{this.props.wine.name}</strong></h1>
    <h3> Wine type: {this.props.wine.wine_type} </h3>
    <h3> Price: ${this.props.wine.price} </h3>

        <Link to={{pathname: `/wines/${this.props.wine.id}`, state: {wine: this.props.wine.id}}}>
        <Button inverted color='orange' content='View Wine' /> 
        </Link>
        
        
        <Button inverted color='red' value={this.props.wine.id} onClick={this.handleClick}><Icon name='heart' size='small'/><span>{this.props.wine.likes}</span>
            
       </Button>
       

    

   
   </div>


)

     }

    }

    
    

    const mapStateToProps = (state) => {
        return {
            wines: state.wines
        }
    }

export default connect(mapStateToProps, {addLike, deleteWine}) (WineCard);

