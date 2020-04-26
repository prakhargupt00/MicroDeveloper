import React,{ Component } from 'react' ;
import axios from 'axios' ; 
import Header from './Header' ;  
import Table from 'react-bootstrap/Table' ; 
class Status extends Component {

    state = {
        loadStatus:false 
    }

    componentWillMount(){
        axios.get('http://localhost:8080/api/micrB').then(res=>{
            this.setState({micros:res.data.micros,loadStatus:true});
            console.log(res.data.micros);
        })
    }

    displayStatus(){
        var micros = this.state.micros ;
        var rows = []
        for(var index=0 ; index < micros.length ; index++){
            rows.push(<tr key={micros[index]._id}>
                <td> {index+2} </td>
                <td> {micros[index].title} </td>
                <td>Not Assigned</td>
                <td><p style={{color:'red'}}>Pending</p></td>
            </tr>)

        }
        console.log(micros[0]);
        return rows ; 
    }

    render(){

        if(this.state.loadStatus){
                return (
                    <div className="home-wrap">
                        <Header/>
                        <center><h1><p style = {{color:'Pink'}}>Status table</p></h1></center>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th><p style = {{color:'LightGrey'}}>Sr.no</p> </th>
                                    <th><p style = {{color:'LightSlateGrey'}}>Requested Microservice</p></th>
                                    <th><p style = {{color:'LightSlateGrey'}}>Developer</p></th>
                                    <th><p style = {{color:'LightSlateGrey'}}>Status</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Login</td>
                                    <td><p style = {{color:'Aqua'}}>@rakesh_maurya</p></td>
                                    <td><p style = {{color:'LawnGreen'}}> Complete</p></td>
                                </tr>
                                {this.displayStatus()}
                            </tbody>
                        </Table>
                    </div>
                )

        }else{
            return(
                <Header/>
            )
        }


    }

}

export default Status;