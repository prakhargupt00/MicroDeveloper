import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class MappingSelection extends Component {
    
    handleChange = event => {
        event.preventDefault()
        var {type, subType} = this.props.associatedMapping
        type = (event.target.id === 'type' ? event.target.value : type)
        subType = (event.target.id === 'subType' ? event.target.value : subType)
        this.props.handleChange(type, subType)
    }

    render() {
        var {types, subTypes} = this.props.allMappings
        var {type, subType} = this.props.associatedMapping

        var typesList = types.map( (item, index) => (
            <option key={index} value={item}> {item} </option>
        ))
        
        var subTypesList = subTypes[type || 'none'].map( (item, index) => (
            <option key={index} value={item}> {item} </option>
        ))

        return (
            <Form>
                <Form.Group controlId='type'>
                    <Form.Label> Mapping Type </Form.Label>
                    <Form.Control 
                        as='select' 
                        value={type || 'none'} 
                        onChange={this.handleChange}
                    >
                        {typesList}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='subType'>
                    <Form.Label> Mapping Subtype </Form.Label>
                    <Form.Control 
                        as='select'  
                        value={subType || subTypes[0]} 
                        onChange={this.handleChange}
                    >
                        {subTypesList}
                    </Form.Control>
                </Form.Group>
            </Form>
        ) 
    }
}

export default MappingSelection
