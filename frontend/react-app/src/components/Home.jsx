import React, { Component } from 'react';
import axios from 'axios'
import './home.css'
import Header from './Header';
import Sidebar from './Sidebar' ;
import Rightbar from './Rightbar';
import Each_MS from './each-ms';
import Each_MSB from './each-msB';

class Home extends Component {
    state = {  
      hasMicroCall: false, 
      hasMicroCallB: false, 
      requestedMicroA: null,
      requestedMicroB: null
    };

    renderMicroservice = micro_id =>{
      console.log('Call for microservice!!');
      this.setState({hasMicroCall:true, requestedMicroA:micro_id}) ; 
    };

    renderMicroserviceB = micro_id =>{
      console.log('Call for microserviceB!!');
      this.setState({hasMicroCallB:true, requestedMicroB:micro_id}) ; 
    };

    showA = () =>{
      if(this.state.requestedMicroA !=null && this.state.hasMicroCall)
      return <Each_MS key= {this.state.requestedMicroA} micro_id={this.state.requestedMicroA} link={false}/>;
    }

    showB = () =>{
      if(this.state.requestedMicroB !=null && this.state.hasMicroCallB)
      return <Each_MSB key= {this.state.requestedMicroB} micro_id={this.state.requestedMicroB} link={false}/>;
    }
    render() { 
      if(this.state.hasMicroCall == false && this.state.hasMicroCallB == false){
        return ( 
          <div className="home-wrap">
              <Header/>
              <div className="landing">
                <h1 className="home-title">MicroDeveloper</h1>
                <div className="land-desc col-lg-6 col-md-7">
                  Micro Developer is a platform for reusing existing microservices to create new microservies.
                </div>
                <Sidebar  renderMicroservice = {this.renderMicroservice}/>
                <Rightbar renderMicroserviceB = {this.renderMicroserviceB}/>
            </div>
          </div> 
        );
      }else{
        return ( 
        <div className="home-wrap">
              <Header/>
              <div className="landing">
                {/* <h1 className="home-title">MicroDeveloper</h1>
                <div className="land-desc col-lg-6 col-md-7">
                  Micro Developer is a platform for reusing existing microservices to create new microservies.
                </div> */}
                <Sidebar renderMicroservice = {this.renderMicroservice}/>
                <div className ="show-micro">
                  {this.showA()}
                  {this.showB()}
                </div>
                <Rightbar renderMicroserviceB = {this.renderMicroserviceB}/>
            </div>
          </div> 
        );
      }
    }
}
 
export default Home;