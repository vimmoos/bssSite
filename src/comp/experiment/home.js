import React from 'react'
import {Panel,Button} from 'react-bootstrap'

export default class Home extends React.Component{
    constructor(props){
        super(props)

    }


    render(){
        console.log(this.props.height)
        return (
        <Panel style={{height:this.props.height}} >
            <Panel.Heading>
            <Panel.Title componentClass='h1'>Memory app 0.2</Panel.Title >
            </Panel.Heading>
            <Panel.Body>
                <Panel>
                    <Panel.Heading>
                    <Panel.Title componentClass="h2"> Consensus</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    the test for the consensus
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                    <Panel.Title componentClass="h2"> Instruction</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    the instruction for the tester
                    </Panel.Body>
                </Panel>
                <Button onClick={this.props.handleClick} bsStyle='primary' bsSize='large'> Press to Start</Button>
            </Panel.Body>
        </Panel> 
        );   
    }
}



