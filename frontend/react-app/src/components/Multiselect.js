import React, { Component } from 'react'
import { Form } from 'react-bootstrap'


class Multiselect extends Component {
    
    handleChange = (event) => {
        event.preventDefault()
        var { id, value } = event.target
        this.props.args[id] = value
        this.props.handleArguments(this.props.args)
    }

    render() {
        if(this.props.args.length === 0) {
            return("No arguments have been selected")
        } else {
            var { parameters, args } = this.props

            var parameterList = parameters.map((item, index) => (
                <option key={index} value={item}> {item} </option>
            ))

            var selectList = args.map((argument, index) => (
                <Form.Group controlId={index} key={index}>
                    <Form.Label>Arg {index+1}:</Form.Label>
                    <Form.Control
                        as='select'
                        value={argument || 'none'} 
                        onChange={this.handleChange}
                    > 
                        {parameterList}
                    </Form.Control>
                </Form.Group>
            ))
            
            return (                
                <Form inline>
                    {selectList}
                </Form>
            )
        }         
    }
}

export default Multiselect
