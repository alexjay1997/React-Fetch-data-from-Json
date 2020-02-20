import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Home from './Home';




class App extends Component {
  render(){
  return (
    <div className="App">
        <Router>
    <Nav />
  <Switch>

  <Route path="/" exact components ={Home}>
  <Home />
    </Route>

  <Route path="/About" components ={About}>
  <About />
    </Route>
  
  


      </Switch>
     
      </Router>

 

    </div>
   
  
  );
}
}
export default App;
