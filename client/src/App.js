import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Microservices from './components/microservices.js'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path = '/microservices' component={Microservices} />
      </div>
    </BrowserRouter>
  );
}

export default App;
