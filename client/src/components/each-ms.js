/***********************************************************************************************************************************************
 A GUIDE TO CREATE A MICRO-FRONTEND
 
 This micro-frontend is based on ReactJS components

 Micro-frontends are counterparts of microservices in the frontend-world, they are lightweight, can be developed independently by a team and be 
 deployed on it's own. They are portable ie. can be embedded in any supported UI.

 Note: This example is just a representation of a micro-frontend, on how should it be coded using react and how we link it to microservices

 This micro-frontend is used to display the details of a microservice owned by a organization. In the final application, this micro-frontend is 
 embedded multiple times, at multiple places, each for a microservice whose details need to be displayed.
 **********************************************************************************************************************************************/


import React , {Component} from 'react'
import Navbar from './navbar.js'
import {Link} from 'react-router-dom';
// import './view_ms.css'
import axios from 'axios'

/* 
The micro-frontend in this example is shown as a React component that can be embedded in other components
*/

class Each_MS extends Component{
  state={
    micro:{title:"MS"},
    loadStatus:false
  }
  
  componentWillMount(){
    /*
    Micro-frontends usually recieve a part or whole of their information from the UI/component it is embedded in. In this case it recieves the _id 
    of the microsrvice whose details it is rendering. This is present in this.props._id.
    It then gets the whole details by making a request to a microservice in the backend that manages the details of all the microservices present owned 
    by the organization
    The micro-frontend stores the data returned by the micro-service in it's state so that it can be rendered 
    */
    axios.post("/api/retr_one",{micro_id:this.props.micro_id}).then(res => {
      console.log("Data reached")
      this.setState({micro:res.data.micro,loadStatus:true})
    })
  }
  render(){
    /*
    This function is returns the content that is to displyed by the micro-frontend.
    The data that was requested from the backend microservice and saved in the state is structured in the form of HTML.
    */
    var micro = this.state.micro ;
    var keywords = micro.keywords ;
    var tech_stack = micro.tech_stack ;
    var params = micro.params;
    if(this.state.loadStatus==true){

    keywords = keywords.map(function(key,index){
      return(<div className="mkey" key={index}><p>{key}</p></div>)
    });
    tech_stack = tech_stack.map(function(tech,index){
      return(<div className="mtech" key={index}><p>{tech}</p></div>)
    })

    params = params.map(function(key,index){
    return ( <div className="mtech"  key={index}><p>{key}</p></div>)
    })
  }
    return(
        <div className='each-micro each-ms-comp' id={"each-microid"}>
            <div className="em-1">
            <h3 className='micro-name'>{micro.title}</h3>
            <div className="micro_keys">
              {keywords}
            </div>
            <h3 className='ts-title'>Params</h3>
            <div className="tech_stack">
              {params}
            </div>
            <h3 className="ts-title">Tech Stack</h3>
            <div className="tech_stack">
                {tech_stack}
            </div>
            <p className="micro-doc"><b>Documentation: </b>{micro.documentation}</p>
            </div>
            <div className="micro-but">
                <Link to={{pathname:"/microservices",state:{micro_id:micro._id}}}>
                  <button className="btn btn-success">Link params</button>
                </Link>
            </div>
        </div>
    )
  }
  /*
  Sometimes, micro-frontends listen to some events and perform actions as well, the function(s) present below are normal event-handlers from react.
  */

}

/*
Component here is exported so that it can be embedded in other , larger Components
*/
export default Each_MS
