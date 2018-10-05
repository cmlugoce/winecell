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
     sortedBy: 'key',
     sorted: false,
     
        
   }
 }
   
  
   componentDidMount() {
     this.props.getWines()
    
   
   }
   
   sortBy=(key) => {
   //debugger
    let wines = [...this.props.wines];
    return wines.sort(this.compareBy(key));
   }
   
   compareBy=(key)=> {
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
      const key = this.state.sortedBy
      const wines = this.sortBy(key)
      //debugger
      const {search} = this.state;
      const filterWines = wines.filter( wine =>{
        return wine.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
         })
         
         return (
        <div className="WinesContainer">
          <br />                       
          <br />
          <br />
           <div>
           <Input label="Filter by name" icon="search" onChange={this.handleChange}/>
           <Button inverted color='yellow' onClick={() => this.setState({sortedBy: 'likes', sorted: true})}  content='Sort by Likes'/>  
            <Button inverted color='yellow' onClick={() => this.setState({sortedBy: 'name', sorted: true})}  content='Sort by Name'/>  
            <div>
            <div>
               {filterWines.map(wine => <WineCard key={wine.id} wine={wine}  />)} 
                       
               </div>    
            </div> 
          <br />       
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