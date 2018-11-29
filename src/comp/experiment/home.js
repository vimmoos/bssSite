import React from 'react'
import {Checkbox,Panel,Button} from 'react-bootstrap'
import FormComponent from './form.js'
export default class Home extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            status: this.props.state, 
            disable: true
        }
    }

    handleConsensus = () => {
        this.setState({ status : 1})
    }

    Accept = (e) => {
        this.setState({disable: !this.state.disable})
    }

    render(){
        const state = this.state.status
        const disable = this.state.disable
        let body 

        if (state===0) {
            body=(
                <div>    
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h2"> Consensus</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>I hereby consent to be a participant in the current research </p>

                        <p>I have agreed to take part in the study entitled (TITLE), and I understand that my participation is entirely voluntary.</p>
                        <p>I understand that my responses will be kept strictly confidential and anonymous.</p>
                        <p>I have the option to withdraw from this study at any time without penalty, 
                            and I also have the right to request that my responses not be used. </p>

                        <p>The following points have been explained to me:</p>

                        <p>The goal of this study is (GOAL). </p>
                        <p>Participation in this study should help advance our understanding of working memory.</p>
                        <p>I shall be asked to (??). </p>
                        <p>The current study will last approximately (??). 
                        At the end of the study, the researcher will explain to me in more detail what the research was about. </p>
                        <p>My responses will be treated confidentially and my anonymity will be ensured.
                            Hence, my responses cannot be identifiable and linked back to me as an individual. </p>
                        <p>The researcher will answer any questions I might have regarding this research, now or later in the course of the study.  </p>
                        <Checkbox onChange={this.Accept}>I accept all the condition cited above </Checkbox>
                    </Panel.Body>
                </Panel>
                <Button onClick={this.handleConsensus} bsStyle='primary' bsSize='large' disabled={disable}>Accept and Continue</Button>
               </div> 
            )
        }else{
            body=(
                <div>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h2"> Instruction</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        the instruction for the tester blablablab

                        <h2>Please enter your Data</h2>
                        <FormComponent
                            handleAge={this.props.handleAge}
                            handleGender={this.props.handleGender}
                            handleOther={this.props.handleOther}
                            gender={this.props.gender}
                        />
                    </Panel.Body>
                </Panel>
                <Button onClick={this.props.handleClick} bsStyle='primary' bsSize='large'>Submit</Button>
                </div>
            )
        }

        return (
        <Panel style={{height:this.props.height}} >
            <Panel.Heading>
            <Panel.Title componentClass='h1'>Memory app 0.2</Panel.Title >
            </Panel.Heading>
            <Panel.Body>
                {body}
            </Panel.Body>
        </Panel> 
        );   
    }
}



