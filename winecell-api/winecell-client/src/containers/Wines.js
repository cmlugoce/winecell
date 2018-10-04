import React, {Component} from 'react';
import {connect} from 'react-redux';
import WineCard from "../components/WineCard";
import { getWines } from '../actions/wines';
import {Button} from 'semantic-ui-react';
//import {Input} from 'mdbreact';
import './Wines.css';



  class Wines extends Component {
    
   constructor(props){
     super(props)
    this.state = {
      //search: '',
     // data: {},              
      sortedBy: false,
        
    }
  }
    
   
    componentDidMount() {
      this.props.getWines()
      //.then(wines => this.setState({ data: wines }));
    
    }
    
    sortBy=(key) => {
 
     // let wines = this.state.data.wines;
     // wines.sort(this.compareBy(key));
      this.setState({sortedBy: true,});
    }

  
      render() {             
              const sorted= [...this.props.wines]
              const sortWines= sorted.sort(function(a, b) {
                                               
                    if (a['likes'] > b['likes']) return -1;
                    if (a['likes'] < b['likes']) return 1;
                    return 0;
                  
              }) 
             // debugger
              const newWines =sortWines.map(wine => <WineCard key={wine.id} wine={wine}  />)
              
      if (!this.state.sortedBy===false){
      
       
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


const mapStateToProps = (state) => {

  return ({

    wines: state.wines
  })
}

export default connect (mapStateToProps, {getWines}) (Wines);
