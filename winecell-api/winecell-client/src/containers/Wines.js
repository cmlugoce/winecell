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

     let wines = [...this.props.wines];
     wines.sort(this.compareBy(key));
     this.setState({sortedBy: wines, sorted: true});
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

 renderWine=()=>{
   
   const {search} = this.state;
   const filteredWines = this.props.wines.filter( wine =>{
   return wine.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
     })
    
   
  if (this.state.sorted===true){


    return (
      <div className="WinesContainer">
       <br />                       
              <br />
              <br />
               <div>
                  <Button inverted color='yellow' onClick={() => this.sortBy('likes')}  content='Sort by Likes'/>  
                  <Button inverted color='yellow' onClick={() => this.sortBy('name')}  content='Sort by Name'/>  
      
                <div>
                {this.state.sortedBy.filter( wine =>{
                return wine.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
                 })
                .map(wine => <WineCard key={wine.id} wine={wine}  />)}      
  
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
                  {filteredWines.map(wine => <WineCard key={wine.id} wine={wine}  />)}      
               </div> 
             <br />       
          </div>   
        
     </div>
      ); 
    }
    
    

 }

 
     render() {             
     
return (
  <div className="WinesContainer">
   <br />                       
          <br />
          <br />
           <div>
           <Input label="Filter by name" icon="search" onChange={this.handleChange}/>
            <div>
            {this.renderWine()}   
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