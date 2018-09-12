import React, { Component } from 'react';
import Wines from './containers/Wines';
import './App.css';



class App extends Component {

 constructor(props) {
   super(props)

   this.state = {
     wines: []
   }
 }

  componentDidMount() {
     fetch('http://localhost:3001/api/wines')
      .then(response => response.json())
      .then(wines => this.setState({wines}))
  }
  render() {

   
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">WINECELL</h1>
        </header>
        
        <Wines wines={this.state.wines} />
      </div>
      
    );
  }
}

export default App;
