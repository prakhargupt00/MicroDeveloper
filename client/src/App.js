import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom' ;
import Microservices from './components/microservices.js' ;
import Combologin from './components/login/comblogin.jsx';
import ServiceMapping from './components/ServiceMapping' ;
import logo from './logo.svg';
// import './App.css'; 


function App() {
  var  microserviceMapping = {
    'parameters': ['A', 'B', 'C', 'D', 'E'],
    'mappings': {
      'A': {'param': 'A', 'type': 'one-to-one', 'subType': 'type A', 'attributes': {'arguments': ['B'], 'code': 'Hey there Im working'}},
      'B': {'param': 'B', 'type': 'one-to-one', 'subType': 'type B', 'attributes': {'arguments': [], 'code': ''}},
      'C': {'param': 'C', 'type': 'one-to-many', 'subType': 'type C', 'attributes': {'arguments': [], 'code': ''}},
      'D': {'param': 'D', 'type': 'one-to-many', 'subType': 'type D', 'attributes': {'arguments': [], 'code': ''}},
      'E': {'param': 'E', 'type': null, 'subType': null, 'attributes': {'arguments': [], 'code': ''}}
    }
  }

  var allMappings = {
    'types': ['one-to-one', 'one-to-many', 'batching', 'splitting', 'none'],
    'subTypes': {
      'one-to-one': ['type A', 'type B', 'type C', 'type D'],
      'one-to-many': ['type E', 'type C', 'type D', 'type A'],
      'batching': ['type F', 'type D', 'type A', 'type B'],
      'splitting': ['type G', 'type A', 'type B', 'type C'],
      'none': ['none']
    }
  }

  var microserviceB = {
    'parameters' : ['B1', 'B2', 'B3', 'B4', 'none'],
    'parameterAttributes' : {
      'B1': {'name': 'B1', 'type': 'int'},
      'B2': {'name': 'B2', 'type': 'string'},
      'B3': {'name': 'B3', 'type': 'float'},
      'B4': {'name': 'B4', 'type': 'int'},
    }
  }
  return (
    <BrowserRouter>
      {/* <div> */}
      <Route exact path = '/microservices' component={Microservices} />
      <Route exact path = '/login' component = {Combologin} />
      <Route exact path = '/mapping' render = { (props) => <ServiceMapping {...props} microservice = {microserviceMapping} allMappings = {allMappings} microserviceB = {microserviceB} />} />
      {/* </div> */}
    </BrowserRouter>
  
  );
}

export default App;
