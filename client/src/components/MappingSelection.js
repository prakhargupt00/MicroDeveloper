import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
 /*
 This component facilitates the selection of the required parameter mapping by the provider.
 */

class MappingSelection extends Component {
    state = {
        // type: this.props.allMappings.types[0],
        // subType: this.props.allMappings.subTypes[this.props.allMappings.types[0]][0]
    }

    componentDidMount() {
        /* type and subType store the selected type and subType of parameter mapping respectively (first entry by default) */
        // var {types, subTypes} = this.props.allMappings
        // this.setState({
        //     type: (this.props.associatedMapping.type || types[0]),
        //     subType: (this.props.associatedMapping.subType || subTypes[types[0]][0]),
        // })
    }

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

        return (
            <Form>
                <Form.Group controlId='type'>
                    <Form.Label>Mapping Type</Form.Label>
                    <Form.Control as='select' value={type || 'none'} onChange={this.handleChange}> {
                        types.map( (item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='subType'>
                    <Form.Label>Mapping Subtype</Form.Label>
                    <Form.Control as='select'  value={subType || 'none'} onChange={this.handleChange}> {
                        subTypes[type || 'none'].map( (item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                    </Form.Control>
                </Form.Group>
            </Form>
        ) 
    }
}

export default MappingSelection
