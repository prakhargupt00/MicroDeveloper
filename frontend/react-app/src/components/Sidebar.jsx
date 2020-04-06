import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import axios from 'axios';
import './sidebar.css' ;

class Sidebar extends Component {
    state = { 
        loadStatus:false 
     }

    componentWillMount(){
        axios.get('http://localhost:8080/api/micr').then(res=>{
          this.setState({micros:res.data.micros,loadStatus:true});
        //   console.log(res.data.micros);
        })
    }

    render() { 
        var micros = this.state.micros ;
        if(this.state.loadStatus==true){
            micros = micros.map(function(micro,index){
              return(
                  <NavItem key= {micro._id}  eventkey = {micro._id} onClick = {() => this.props.renderMicroservice(micro._id)}>
                      <NavText>
                          {micro.title}
                      </NavText>
                  </NavItem>
              )
            }.bind(this));
          }

        return ( <SideNav
            onSelect={(selected) => {
                // const to = '/' + selected;
                // if (location.pathname !== to) {
                //     history.push(to);
                // }
            
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="Microservices">
                <NavItem eventKey="Home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="Microservices">
                    <NavIcon>
                        <i className="fa fa-cubes" aria-hidden="true" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Microservices
                    </NavText>
                    {micros}
                </NavItem>
                <NavItem eventKey="Reports">
                    <NavIcon>
                        <i className="fa fa-wpforms" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Reports
                    </NavText>
                </NavItem>
                <NavItem eventKey="Setting">
                    <NavIcon>
                        <i className="fa fa-cogs" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Settings
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav> );
    }
}
 
export default Sidebar;