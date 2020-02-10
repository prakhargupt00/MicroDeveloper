import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
/*
Component to render Attributes of Translation Mapping
*/

class MappingAttributes extends Component {
    state = {
        
    }

    componentDidMount() {

    }

    handleArguments = event => {
        event.preventDefault()
        this.props.handleArguments(event.target.value)
    }

    handleCode = event => {
        event.preventDefault()
        this.props.handleCode(event.target.value)
    }

    render() {
        return (
            <Form>
                <Form.Group controlId='parameters'>
                    <Form.Label> Select Parameters </Form.Label>
                    <Form.Control
                        as='select'
                        value={this.props.microserviceMapping.attributes.arguments[0] || 'none'} 
                        onChange={this.handleArguments}
                    > {
                        this.props.microserviceB.parameters.map( (item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='code'>
                    <Form.Label> Mapping Function </Form.Label>
                    <Form.Control 
                        as='textarea' 
                        rows='10'  
                        value={this.props.microserviceMapping.attributes.code}
                        onChange={this.handleCode}
                    />
                </Form.Group>
            </Form>
        )        
    }
}

export default MappingAttributes
