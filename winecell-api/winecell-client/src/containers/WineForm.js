import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createWine } from '../actions/wines';
import { updateWineFormData} from '../actions/wineForm';
import { Button, Form } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';



class WineForm extends Component {
  state = {
    redirectToPage: false
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentwineFormData = Object.assign({}, this.props.wineFormData, {
      [name]: value
    })
    
    this.props.updateWineFormData(currentwineFormData)

  }

  handleOnSubmit = event => {
    event.preventDefault();
    
    console.log('A')
    this.props.createWine(this.props.wineFormData)
    console.log('B')
    
    this.setState({ redirectToPage: true })
  }

  render() {
    const { name, description, wine_type, image, year, price} = this.props.wineFormData;
    if (this.state.redirectToPage) {
      return (
        <Redirect to="/wines"/>
        )
      }
    return (
      
       <div className='form'>
       <div className='formss'>
          <h1 ><strong> Add a wine bottle</strong></h1> </div>
           <Form  onSubmit={this.handleOnSubmit}>
           <Form.Field>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'name' value={name} placeholder = 'Name' /></div>
             </Form.Field>
             <Form.Field>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'description' value={description} placeholder = 'Description' /></div>
             </Form.Field>
             <Form.Field>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'wine_type' value={wine_type} placeholder = 'Wine type' /></div>
             </Form.Field>
             <Form.Field>
             <div><input type = 'text'onChange={this.handleOnChange}  name= 'image' value={image} placeholder = 'Image' /></div>
             </Form.Field>
             <Form.Field>
             <div>
             <label htmlFor='year'> Year: </label>
               <input type = 'number' onChange={this.handleOnChange} name= 'year' value={year} placeholder = 'Year' /></div>
               </Form.Field>
               <Form.Field>
             <div>
             
             
               <label htmlFor='price'> Price: </label>
               <input type = 'number'onChange={this.handleOnChange}  name= 'price' value={price} placeholder = 'Price' /></div>
               </Form.Field>
                <br></br>
               <Button type="submit" > Add Wine bottle </Button>
               <br />
            </Form>
            <br />
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