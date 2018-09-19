import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addLike} from '../actions/wines';
import { Link } from "react-router-dom";
import {  Button, Icon } from 'semantic-ui-react'
import { getWines} from '../actions/wines';

class WineCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentlyDisplayed: this.props.wine
          }
    }

    componentWillMount(){
       // this.props.getWines()
      }

      componentDidMount() {
        this.setState({
           currentlyDisplayed: this.props.wine
         })
          
      }

  //  likeWine = (id) => {
    //    this.setState(prevState => {
      ///      return {
         //     count: ++prevState.count
           // }
         // })
       // }
      //  id = this.props.wine.id
      //    return fetch(`/wines/${id}`, {
      //      method: "PATCH",
       //     headers: {
           //   "Content-Type": "application/json"
           // },
           // body: id
     //     })
     //   };
     

    handleClick = (event) => {
        event.preventDefault()
        let wine = this.props.wines.find(function(wine){return (wine.id).toString() === event.target.value})
       this.props.addLike(wine)
      }
       //id=this.props.wine.id
     //   return fetch(`http://localhost:3001/api/wines`, {
      //      method: "PUT",
      //      headers: {
      //        "Content-Type": "application/json"
      //      },
      //      body: this.props.wine.id
      //    })
        
      
       //console.log('liked');
     //}
     // componentDidUpdate() {
    //localStorage.setItem('_increment', JSON.stringify(this.state))  
  //}

  
  

     render() {
      
         return (

            

    <div key={this.props.wine.id} className="WineCard">
   
    
    <img className="WineImage" src={this.props.wine.image} alt={this.props.wine.name} />
    
    <br />
    <br />
    <h1 id="wineName"><strong>{this.props.wine.name}</strong></h1>
    <h3> Wine type: {this.props.wine.wine_type} </h3>
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

export default connect(mapStateToProps, {addLike}) (WineCard);

