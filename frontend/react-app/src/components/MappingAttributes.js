import React, { Component } from 'react'
import { Form, Container, Row, ButtonGroup, Button } from 'react-bootstrap'
import MonacoEditor from 'react-monaco-editor';
import Multiselect from './Multiselect'

class MappingAttributes extends Component {
    
    handleClick = event => {
        event.preventDefault()
        var name = event.target.name
        var args = this.props.microserviceMapping.function.arguments
        if(name === 'add') {
            args.push(null)
            this.props.handleArguments(args)
        } else if(name === 'remove') {
            args.pop()
            this.props.handleArguments(args)
        }
    }

    render() {
        const options = {
            selectOnLineNumbers: true
        }        
        var { type, subType } = this.props.microserviceMapping
        var code = this.props.microserviceMapping.function.code
        {/*TODO: Finalise logic for template updation */}
        if(code.length === 0) {
            this.props.handleCode(this.props.templates[type][subType])
        }
        
        return (            
            <Container>
                <Row>
                    <Form.Group controlId='functionName'>
                        <Form.Label> Mapping Function's Name </Form.Label>
                        <Form.Control 
                            type='text'
                            value = {this.props.microserviceMapping.function.name || ''}
                            onChange = {event => {
                                event.preventDefault()
                                this.props.handleName(event.target.value)
                            }}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    < Multiselect
                        args = {this.props.microserviceMapping.function.arguments}
                        parameters = {this.props.requestedMicroservice.parameters}
                        handleArguments = {this.props.handleArguments}
                    />
                </Row>
                <br/>
                <Row>
                    <ButtonGroup>
                        <Button 
                            variant='outline-dark' 
                            size='ls' 
                            name='add' 
                            onClick={this.handleClick}
                        > 
                            Add 
                        </Button>
                        <Button 
                            variant='outline-secondary' 
                            size='ls' 
                            name='remove' 
                            onClick={this.handleClick}
                        > 
                            Remove 
                        </Button>
                    </ButtonGroup>
                </Row>
                <br/>
                <Row>
                    <Form.Group controlId='code'>
                        <Form.Label> Function implementation </Form.Label>
                        <MonacoEditor
                            height="400"
                            width="600"
                            language="javascript"
                            theme="vs-dark"
                            defaultValue="aa"
                            value={this.props.microserviceMapping.function.code}
                            onChange={this.props.handleCode}
                            options={options}
                        />
                    </Form.Group>
                </Row>                    
            </Container>
        )        
    }
}

export default MappingAttributes
