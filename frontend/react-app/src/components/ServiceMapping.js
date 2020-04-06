import React, { Component } from 'react';
import axios from 'axios'
import config from "react-global-configuration";
import { Container, Row, Col, ButtonGroup, Button, Spinner } from 'react-bootstrap'
import ParamList from './ParamList'
import MappingSelection from './MappingSelection'
import MappingAttributes from './MappingAttributes'


class ServiceMapping extends Component {
    state = {
        parameter: null,
        mapping: {
            'type': null,
            'subType': null
        },
        microserviceMapping: null,
        allMappings: null,
        requestedMicroserviceName: 'B'
    }

    componentDidMount() {
        const host = config.get('host_url')
        axios.get(host + config.get('routes.allMappings'))
        .then(res => {
            this.setState({
                allMappings: res.data.allMappings
            })
        })

        axios.get(host + config.get('routes.templates'))
        .then(res => {
            console.log(res)
            this.setState({
                templates: res.data.templates
            })
        })
        
        axios.post(host + config.get('routes.microservice'), {'microservice' : 'B'})
        .then(res => {
            this.setState({
                requestedMicroservice: res.data.requestedMicroservice
            })
        })

        axios.post(host + config.get('routes.mapping'), {'existing': 'A', 'requested': 'B'})
        .then(res => {
            this.setState({
                microserviceMapping: res.data.microserviceMapping,
                originalMapping: res.data.microserviceMapping
            })
        })
    }

    selectParam = param => {
        this.setState(state => ({
            parameter: param,
            mapping: {
                type: state.microserviceMapping.mappings[param].type,
                subType: state.microserviceMapping.mappings[param].subType
            }
            })
        )
    }

    selectMapping = (type, subType) => {
        this.setState(state => {            
            var microserviceMapping = {...state.microserviceMapping}
            microserviceMapping.mappings[state.parameter].type = type
            microserviceMapping.mappings[state.parameter].subType = subType
            return {
                mapping: {
                    'type': type,
                    'subType': subType
                },
                microserviceMapping: microserviceMapping                
            }
        })
    }

    handleName = value => {
        this.setState(state => {            
            var microserviceMapping = {...state.microserviceMapping}
            microserviceMapping.mappings[state.parameter].function.name = value
            return {
                microserviceMapping: microserviceMapping                
            }
        })
    }

    handleArguments = value => {
        this.setState(state => {            
            var microserviceMapping = {...state.microserviceMapping}
            microserviceMapping.mappings[state.parameter].function.arguments = value
            return {
                microserviceMapping: microserviceMapping                
            }
        })
    }

    handleCode = value => {
        this.setState(state => {            
            var microserviceMapping = {...state.microserviceMapping}
            microserviceMapping.mappings[state.parameter].function.code = value
            return {
                microserviceMapping: microserviceMapping                
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(event.target.name === 'submit') {
            axios.post(config.get('host_url') + config.get('routes.updateMapping'), {
                microserviceMapping: this.state.microserviceMapping,
                requestedMicroserviceName: this.state.requestedMicroserviceName
            }).then(res => {
                console.log('Mapping has been updated.')
                console.log(this.state.microserviceMapping)
            })
            
        } else if(event.target.name === 'cancel'){
            console.log('Process cancelled.')
            this.setState({
                microserviceMapping: this.state.originalMapping
            })
        }
    }

    // TODO: standardize the null-none correspondences in select menus
    render() {
        var { microserviceMapping, parameter, mapping,
             allMappings, requestedMicroservice, templates } = this.state
        if(microserviceMapping && requestedMicroservice && templates && allMappings) {
            return (
                <Container>
                    <Row>
                        <Col md='auto'> 
                            {microserviceMapping && <h4> Parameters </h4>}                        
                            {microserviceMapping && <ParamList 
                                    paramList = {microserviceMapping.parameters} 
                                    onClick = {this.selectParam}
                                    />
                            }
                        </Col>
                        <Col md='auto'> 
                            {parameter && <h4> Associated Mapping </h4>}                        
                            {parameter &&  <MappingSelection 
                                    allMappings = {allMappings} 
                                    associatedMapping = {microserviceMapping.mappings[parameter]}
                                    handleChange = {this.selectMapping }
                                    />
                            }
                        </Col>
                        <Col>                        
                            {mapping.subType && <h4> Attributes </h4>}                        
                            {mapping.subType && <MappingAttributes
                                    microserviceMapping = {microserviceMapping.mappings[parameter]} 
                                    requestedMicroservice = {requestedMicroservice}
                                    templates = {templates}
                                    handleName = {this.handleName}
                                    handleArguments = {this.handleArguments}
                                    handleCode = {this.handleCode}
                                    />
                            }                            
                        </Col>
                    </Row>
                    <Row>                
                        <Col md={{offset: 8}}>
                            <ButtonGroup>
                                <Button 
                                    variant='outline-primary' 
                                    size='md' 
                                    name='submit' 
                                    onClick={this.handleSubmit}
                                > 
                                    Submit 
                                </Button>
                                <Button 
                                    variant='outline-secondary' 
                                    size='md' 
                                    name='cancel' 
                                    onClick={this.handleSubmit}
                                > 
                                    Cancel 
                                </Button>
                            </ButtonGroup>                        
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
                <h3 className="text-center"> 
                    <Spinner animation="border" variant="primary" />
                </h3>                 
            )
        }        
    }
}

export default ServiceMapping;
