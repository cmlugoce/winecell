import React, {Component} from 'react';  
//import {loadWine} from '../actions/wines';
//import PropTypes from 'prop-types';
//import {connect} from 'react-redux';


class WinePage extends Component {
    state = {
        activeWine: []
    }

    componentDidMount= async ()=> {
       // const name = this.props.location.state.wine;
        const req = await fetch ('http://localhost:3001/api/wines')
        const res = await req.json();
        //console.log(res[0]);
        this.setState({activeWine: res[0]});
        console.log(this.state.activeWine);
      
    }
   render(){
       const wine = this.state.activeWine;
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
          <div className="container">
           <div className= "active-wine">
            <img className="active-wine_img" src={wine.image} alt={wine.name}/>
            <h2 className = "active-wine_name">{wine.name}</h2>
            <h3>Wine type: {wine.wine_type}</h3>
            <h3> Year: {wine.year} </h3>
            <h3> Description: {wine.description} </h3>
            <h3> Price: ${wine.price} </h3>

          </div>
          </div>
        </div>

    )

  }

}



  export default WinePage;