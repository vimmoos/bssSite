import React from 'react'
import {Panel,Button} from 'react-bootstrap'

export default class Result extends React.Component {
    
    constructor(props){
        super(props);

    }

    componentDidMount (){
        this.props.handleFinish()
    }

    render(){
        const resultI = this.props.resultI
        const resultA = this.props.resultA
        return(
            <Panel style={{height:this.props.height}} >
                <Panel.Heading>
                    <Panel.Title componentClass="h1"> Memory app 0.5 </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h2"> Result </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <h1> Congratulations </h1>
                            <h3> you got {resultI} out of 30  for the visual part</h3>
                            <h3> and </h3>
                            <h3> {resultA} out of 30 for the auditory part</h3>
                        </Panel.Body>
                    </Panel>
                    <Button onClick={this.props.handleBackHome} bsStyle='primary' bsSize='large'>Back Home</Button>
                </Panel.Body>
            </Panel>
        )
    }

}
