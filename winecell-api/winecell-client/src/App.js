import React, { Component } from 'react';
import Wines from './containers/Wines';

import './App.css';



class App extends Component {

 

  
  render() {

   
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">WINECELL</h1>
        </header>
        
        <Wines  />
      </div>
      
    );
  }
}

export default App;
