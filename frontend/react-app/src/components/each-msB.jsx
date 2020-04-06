import React , {Component} from 'react'
import {Link} from 'react-router-dom';
import './view_ms.css'
import axios from 'axios'


class Each_MSB extends Component{
  state={
    micro:{title:"MS"},
    loadStatus:false
  }
  
  componentWillMount(){

    axios.post("http://localhost:8080/api/retr_oneB",{micro_id:this.props.micro_id}).then(res => {
      console.log("Data reached")
      this.setState({micro:res.data.micro,loadStatus:true})
    })
  }
  render(){
    var micro = this.state.micro ;
    var params = micro.params;
    if(this.state.loadStatus == true){
    params = params.map(function(key,index){
    return ( <div className="mtech"  key={index}><p>{key}</p></div>)
    })
  }
    return(
        <div className='each-micro each-ms-comp' id={"each-microid"}>
            <div className="em-1">
                <h3 className='micro-name'>{micro.title}</h3>
                <h3 className='ts-title'>Params</h3>
                <div className="tech_stack">
                    {params}
                </div>
                <div>
                    <Link to={{pathname:"/mapping",state:{micro_id:micro._id}}}>
                    <button className="btn btn-success">Link params</button>
                    </Link>
                </div>
            </div>
        </div>
    )
  }

}

export default Each_MSB
