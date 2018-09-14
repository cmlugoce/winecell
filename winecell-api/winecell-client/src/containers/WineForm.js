import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createWine } from '../actions/wines';
import { updateWineFormData} from '../actions/wineForm';


class WineForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentwineFormData = Object.assign({}, this.props.wineFormData, {
      [name]: value
    })
    
    this.props.updateWineFormData(currentwineFormData)

  }

  handleOnSubmit = event => {
    event.preventDefault();
    
    
    this.props.createWine(this.props.wineFormData)
    
  }

  render() {
    const { name, description, wine_type, image, year, price} = this.props.wineFormData;

    return (
       <div >
           Add a wine bottle 
           <form  onSubmit={this.handleOnSubmit}>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'name' value={name} placeholder = 'Name' /></div>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'description' value={description} placeholder = 'Description' /></div>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'wine_type' value={wine_type} placeholder = 'Wine type' /></div>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'image' value={image} placeholder = 'Image' /></div>
             <div>
             <label htmlFor='year'> Year: </label>
               <input type = 'number' onChange={this.handleOnChange} name= 'year' value={year} placeholder = 'Year' /></div>
             <div>
               <label htmlFor='price'> Price: </label>
               <input type = 'number'onChange={this.handleOnChange}  name= 'price' value={price} placeholder = 'Price' /></div>
                <br></br>
               <button type="submit" > Add Wine bottle </button>
            </form>
        </div>

    )




  }



}


const mapStateToProps = state =>{


return {
  wineFormData: state.wineFormData
}

}

export default connect (mapStateToProps,  { updateWineFormData, createWine }) (WineForm);