import React, { Component } from 'react';
//import Wines from './containers/Wines';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import wineIndex from './components/allWines';
import Error from './components/Error';
import WineFormPage from './components/WineFormPage';
import WinePage from './components/WinePage';

import Navbar from './components/Navbar';


class App extends Component {

 

  
  render() {

   
    return (
      <div className="App">
        
        <BrowserRouter>
        <div>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/wines' component={wineIndex} exact />
          <Route path='/wines/:id' component={WinePage} />
          <Route path='/new' component={WineFormPage} />
          <Route component={Error} />
         
          </Switch>
          </div>
        </BrowserRouter>
        
      </div>
      
    );
  }
}

export default App;
