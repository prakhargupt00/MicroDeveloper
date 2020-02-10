import React, { Component } from 'react'
import  { Button, ButtonGroup } from 'react-bootstrap'

/*
To be rendered in the leftmost column. It should display the list of Parameters that the selected MS has.
Props : list of parameters that the existing service has(in form of JSON)
Callbacks : A function to handle ClickEvent, when a parameter is selected. The function should be able to convey the selected
Param to the ParentComponent.
*/

class ParamList extends Component {
    state = {

    }

    componentDidMount() {
       
    }

    /* Method to handle selection of parameter. It calls the callback function provided in props, so that SericeMapping's
    state.parameter gets the value of the selected parameter. */
    handleClick = event => {
        event.preventDefault()      
        this.props.onClick(event.target.name)
    }

    render() {
        /* construct a list of react-bootstrap buttons, for a parameter each. */
        var params = this.props.paramList.map((item, index) => (
            <Button variant="outline-primary" size="md" key={index} name={item} onClick={this.handleClick}>{item}</Button>
        ))
        return (
            <ButtonGroup vertical>
                {params}
            </ButtonGroup>
        )
            
    }
}

export default ParamList
