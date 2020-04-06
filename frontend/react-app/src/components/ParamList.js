import React, { Component } from 'react'
import  { Button, ButtonGroup } from 'react-bootstrap'

class ParamList extends Component {
    
    handleClick = event => {
        event.preventDefault()      
        this.props.onClick(event.target.name)
    }

    render() {
        var params = this.props.paramList.map((item, index) => (
            <Button 
                variant="outline-primary" 
                size="md" key={index} 
                name={item} 
                onClick={this.handleClick}
            >
                {item}
            </Button>
        ))
        return (
            <ButtonGroup vertical>
                {params}
            </ButtonGroup>
        )
            
    }
}

export default ParamList
