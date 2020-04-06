import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import axios from 'axios';
import './sidebar.css' ;

class Rightbar extends Component {
    state = { 
        loadStatus:false 
     }

    componentWillMount(){
        axios.get('http://localhost:8080/api/micrB').then(res=>{
          this.setState({micros:res.data.micros,loadStatus:true});
        //   console.log(res.data.micros);
        })
    }

    render() { 
        var micros = this.state.micros ;
        // console.log(this.props.renderMicroserviceB);
        if(this.state.loadStatus==true){
            micros = micros.map(function(micro,index){
              return(
                  <NavItem key= {micro._id}  eventkey = {micro._id} onClick = {() => this.props.renderMicroserviceB(micro._id)}>
                      <NavText>
                          {micro.title}
                      </NavText>
                  </NavItem>
              )
            }.bind(this));
          }

        return ( 
            <div className="request-micro">
                <SideNav
                    disabled="true"
                    expanded="true" 
                    onSelect={(selected) => {
                        // const to = '/' + selected;
                        // if (location.pathname !== to) {
                        //     history.push(to);
                        // }
                    
                    }} >
                    <SideNav.Toggle/>
                    <SideNav.Nav defaultSelected="Microservices">
                        <NavItem eventKey="Microservices">
                            <NavIcon>
                                <i className="fa fa-cubes" aria-hidden={true} style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Microservices B
                            </NavText>
                            {micros}
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
         );
    }
}
 
export default Rightbar;