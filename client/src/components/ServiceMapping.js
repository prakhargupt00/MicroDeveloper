import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import ParamList from './ParamList'
import MappingSelection from './MappingSelection'
import MappingAttributes from './MappingAttributes'

/* 
Note: This page should mainly contain only two buttons 1. Submit 2. Cancel. All the data that gets updated,
all the mappings added, edited, removed should be reflected in a state attribute. If the user presses Submit
button, send a post request with that state attribute(with or without validations.)

A container to implement mapping of all the parameters of a microservice. It has 3 columns.

Leftmost: Renders ParamList component. Gives it the list of parameters as props, along with a callback function that
updates the state variable "Selected Parameter"

Middle: Renders ParameterMappings component. Props: list of existing mappings. Callbacks for add/ edit/ delete a mapping,
and for handleClick to return the selected mapping.

Rightmost: Renders the MappingsAttribute component. 
    Decide between :
        1. Update state onChange vs Update state when a done button is pressed.
        2. Implement 'selection' of 'component' that displays a mapping's attributes(each mapping type has different component)
            in ServiceMapping vs in MappingsAttribute i.e. Implementing logic at a place not intended for it vs adding an extra
            level in callbacks.
    when going for options 1 and 2 in respective.
    Pass props to the MappingsAttribute component for : The type and attributes of the mapping. Callbacks: To handle changes in
    attributes. The mappings attribute component passes the props after deciding the suitable component to render the 
    mapping's attributes.
 
*/

class ServiceMapping extends Component {
    state = {
        parameter: null, //selected parameter
        mapping: {      //selected type and subtype of mapping
            'type': null,
            'subType': null
        },
        //TODO: a COPY of props.Microservice to distinguish between existing and modified service mapping (TODO)
        microservice: {...this.props.microservice},
        allMappings: {...this.props.allMappings}
    }

    componentDidMount() {
        // TODO: Implement Axios calls to get: the selected microservice's mapping object (template sake, if mapping doesn't exist),
        // types of mappings available,
        // Currently receiving this data as props from App
    }

    /* a method to be passed as callback via props to ParamList.
       It handles selection of Parameter by updating the same in ServiceMapping's state
       and sets the mapping attribute of state, to null.  */    
    selectParam = param => {
        this.setState(state => ({
            parameter: param,
            mapping: {
                type: state.microservice.mappings[param].type,
                subType: state.microservice.mappings[param].subType
            }
            })
        )
    }

    /* a method to be passed as callback via props to MappingSelection.
       It handles selection of mapping type and subtype by updating the same in ServiceMapping's state */
    selectMapping = (type, subType) => {
        this.setState(state => {            
            var microservice  = {...state.microservice}
            microservice.mappings[state.parameter].type = type
            microservice.mappings[state.parameter].subType = subType
            return {
                mapping: {
                    'type': type,
                    'subType': subType
                },
                microservice: microservice                
            }
        })
    }

    handleCode = value => {
        this.setState(state => {            
            var microservice  = {...state.microservice}
            microservice.mappings[state.parameter].attributes.code = value
            return {
                microservice: microservice                
            }
        })
    }

    handleArguments = value => {
        this.setState(state => {            
            var microservice  = {...state.microservice}
            microservice.mappings[state.parameter].attributes.arguments[0] = value
            return {
                microservice: microservice                
            }
        })
    }

    /* TODO: Method to handle actions of the submit and the cancel button.
    submit:  Perform necessary validations(if required) and post updated mapping object to backend, then notify user about its status.
    cancel: Set the current copy of mapping object equal to the existing value and notify the user about the same. */
    handleSubmit = (event) => {
        event.preventDefault()
        if(event.target.name === 'submit') {
            console.log('Mapping has been updated.')
            console.log(this.state.microservice)
        } else if(event.target.name === 'cancel'){
            console.log('Process cancelled.')
            // Route to homepage etc.
        }
    }

    /*render method of react. */
    render() {
        var { microservice, parameter, mapping, allMappings } = this.state

        return (
            /* A component comprising of 2 rows of 3 columns each */
            <Container>
                {/* 'microservice !== null' means the props has a microservices mapping object, hence parameter list can be rendered
                'parameter !== null' means there is a valid selection of parameter and hence, the associated mapping can be displayed
                'mapping.subType !== null' also means 'mapping.type !== null', i.e. a mapping type and subtype have been selected
                for the selected parameter.*/}
                {/* Each column in the second row renders a component. */}
                <Row>
                    <Col md='auto'> 
                        {microservice && (<h4> Parameters</h4>)}
                        {(microservice) && (<ParamList paramList = {microservice.parameters} onClick = {this.selectParam}/>)}
                    </Col>
                    <Col md='auto'> 
                        {parameter && (<h4> Associated Mapping</h4>)}
                        {(parameter) &&  (<MappingSelection allMappings = {allMappings} associatedMapping = {microservice.mappings[parameter]}
                        handleChange = {this.selectMapping }/>) }
                    </Col>
                    <Col>                        
                        {mapping.subType && (<h4> Attributes</h4>)} 
                        {
                            (mapping.subType) && (
                                <MappingAttributes
                                    microserviceMapping = {microservice.mappings[parameter]} 
                                    microserviceB = {this.props.microserviceB} 
                                    handleCode = {this.handleCode}
                                    handleArguments = {this.handleArguments}
                                />
                            )
                        }
                        
                    </Col>
                </Row>
                {/* Third row renders two buttons, for submitting/ cancelling the changes. */}
                <Row>                
                    <Col md={{offset: 8 }}>
                        <ButtonGroup>
                            <Button variant='outline-primary' size='md' name='submit' onClick={this.handleSubmit}> Submit </Button>
                            <Button variant='outline-secondary' size='md' name='cancel' onClick={this.handleSubmit}> Cancel </Button>
                        </ButtonGroup>                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ServiceMapping;
