import React, {Component} from 'react';
import {connect} from 'react-redux';
import WineCard from "../components/WineCard";
import { getWines } from '../actions/wines';
import {Button} from 'semantic-ui-react';
import {Input} from 'mdbreact';
//import Filters from './Filters';
//import Filter from '../components/Filter';
///import {Route, Switch } from 'react-router-dom';
import './Wines.css';



const winer=getWines()

  class Wines extends Component {
    
   constructor(props, context){
     super(props, context)
    this.state = {
      search: '',
      data: {},              
      sortBy: 'name',
      sortedBy: 'likes', 
      
         
    }
  }
    

    componentDidMount() {
      this.props.getWines()
      .then(wines => this.setState({ data: this.props.wines }));
    
    }
    
  
  

sortBy=(likes) => {
 
  let wines = this.state.data;
    wines.sort(this.compareBy(likes));
    this.setState({sortedBy: wines});
  }
 
    
    compareBy(likes) {
      return function (a, b) {
        if (a[likes] > b[likes]) return -1;
        if (a[likes] < b[likes]) return 1;
        return 0;
      };
    }
    sortByName=(name) => {
 
      let wines = this.state.data;
        wines.sort(this.compareByName(name));
        this.setState({sortBy: wines});
      }
     
        
        compareByName(name) {
          return function (a, b) {
            if (a[name] < b[name]) return -1;
            if (a[name] > b[name]) return 1;
            return 0;
          };
        }
  

handleChange= (event) =>{
  this.setState({ search: event.target.value });

}


  
      render() {

        
        
        const {search} = this.state;
        const filteredWines = this.props.wines.filter( wine =>{
            return wine.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
      
  
       return (
         <div className="WinesContainer">
        <br />
        
        <div className="col">
              <Input label="Filter by name" icon="search" onChange={this.handleChange}/>
              

         </div>         
         <br />
         <br />
         <div>
         <Button inverted color='yellow' onClick={() => this.sortBy('likes')}  content='Sort by Likes'/>  
         <Button inverted color='yellow' onClick={() => this.sortByName('name')}  content='Sort by Name'/>  

       <br />
       {filteredWines.map(wine => <WineCard key={wine.id} wine={wine}  />)}  
       
       
      </div>
     
       
      
       
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
