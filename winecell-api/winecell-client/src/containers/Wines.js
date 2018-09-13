import React, {Component} from 'react'
import WineCard from "../components/WineCard";
import WineForm from "../containers/WineForm";
import './Wines.css';

  class Wines extends Component {
      render() {
       return (
         <div className="WinesContainer">
       <h1> Wines </h1>
       {this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} />)}     
        <WineForm />
       </div>
    );  

 }
}




export default Wines;
