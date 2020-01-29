import React , {Component} from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'

class Navbar extends Component{
  state={
    
  }

  render(){
    
    return(
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      {/* <Link to={{pathname:'/',state:{user:this.state.user}}}><li class="navbar-brand">MicroManager</li></Link> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
          </ul>
        </div>
      </nav>
    )
  }
  
    
  
}

export default Navbar
