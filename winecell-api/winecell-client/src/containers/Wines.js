import React, {Component} from 'react';
import {connect} from 'react-redux';
import WineCard from "../components/WineCard";
import { getWines } from '../actions/wines';
import {Button} from 'semantic-ui-react';
import {Input} from 'mdbreact';
import './Wines.css';






  class Wines extends Component {
    
   constructor(props){
     super(props)
    this.state = {
      search: '',
      data: {},              
      sortedBy: 'key', 
      
         
    }
  }
    
   
    componentDidMount() {
      this.props.getWines()
      .then(wines => this.setState({ data: wines }));
    
    }
    
    sortBy=(key) => {
 
     // let wines = this.state.data.wines;
     // wines.sort(this.compareBy(key));
      this.setState({sortedBy: 'name'});
    }
  
    compareBy(key) {
      return function (a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }
   
  

handleChange= (event) =>{
  this.setState({ search: event.target.value });

}



 

  
      render() {             
              const sorted= [...this.props.wines]
              const sortWines = sorted.sort(function(a, b) {
                
                  return b.likes - a.likes;
                  
              }) 
              const newWines = sortWines.map(wine => <WineCard key={wine.id} wine={wine}  />)
        
      if (!this.state.sortedBy){
      
       
        return (
          <div className="WinesContainer">
           <br />                       
                  <br />
                  <br />
                   <div>
                      <Button inverted color='yellow' onClick={() => this.sortBy('likes')}  content='Sort by Likes'/>  
                      <Button inverted color='yellow' onClick={() => this.sortBy('name')}  content='Sort by Name'/>  
          
                    <div>
                    {newWines}   
                    </div> 
                  <br />       
               </div>   
             
          </div>
     );  
         
    
  }else{
    return (
    
<div className="WinesContainer">
          <br />                       
                 <br />
                 <br />
                  <div>
                     <Button inverted color='yellow' onClick={() => this.sortBy('likes')}  content='Sort by Likes'/>  
                     <Button inverted color='yellow' onClick={() => this.sortBy('name')}  content='Sort by Name'/>  
         
                   <div>
                      {this.props.wines.map(wine => <WineCard key={wine.id} wine={wine}  />)}      
                   </div> 
                 <br />       
              </div>   
            
         </div>
          ); 
  }
 }
}
//const {search} = this.state;
      //  const filteredWines = this.props.wines.filter( wine =>{
    //        return wine.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
      //  })
     // <div className="col">
      //<Input label="Filter by name" icon="search" onChange={this.handleChange}/>
    

     //</div>  


const mapStateToProps = (state) => {

  return ({

    wines: state.wines
  })
}

export default connect (mapStateToProps, {getWines}) (Wines);
