import React from 'react'
import {Panel,Button} from 'react-bootstrap'

export default class Result extends React.Component {
    
    constructor(props){
        super(props);

    }



    render(){

        return(
            <Panel style={{height:this.props.height}} >
                <Panel.Heading>
                    <Panel.Title componentClass="h1"> Memory app 0.2 </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h2"> Result </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            the result are blabalabalabalaba
                        </Panel.Body>
                    </Panel>
                    <Button onClick={this.props.handleFinish} bsStyle='primary' bsSize='large'>Back Home</Button>
                </Panel.Body>
            </Panel>
        )
    }

}
