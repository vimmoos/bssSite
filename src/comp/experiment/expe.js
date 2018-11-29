import React from 'react'
import Home from './home.js'
import Animation from './../animation.js'
import Result from './result.js'
import Question from './question.js'
import FormComponent from './form.js'
import {Button,ProgressBar} from 'react-bootstrap'
const def = "male"
export default class Expe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status: 0,
            data: {
                other : undefined,
                age: undefined,
                gender:def,
            }
        }
    }    
    
    handleNextStatus = () => {
        this.setState({status: this.state.status+1})
    }

    handleFinishTest = () => {
        this.setState({status: 0})
    }

    handleInfo = () => {
        this.setState({status: -1})
    }

    handleForm = (data) => {
        this.setState({data})
    }
    
    
    
    handleAge= (e) => {
        this.setState({ 
            data:
                {
                    other:this.state.data.other,
                    gender:this.state.data.gender,
                    age: e.target.value
                }
        });
    }

    handleGender = (e) => {
        this.setState({
            data : 
                {
                    other:this.state.data.other,
                    age : this.state.data.age,
                    gender: e.target.value
                }
        });
    }

    handleOther = (e) => {
        this.setState({
            data:
                {
                    age: this.state.data.age,
                    gender: this.state.data.gender,
                    other : e.target.value
                }
        });
   }



    render() {
        const state = this.state.status;
        let active 

        switch (state) {
            case 0 :
                return  (
                        <Home 
                            height={this.props.height}
                            width={this.props.width}
                            handleClick={this.handleNextStatus}
                            handleAge={this.handleAge}
                            handleGender={this.handleGender}
                            handleOther={this.handleOther}
                            gender={this.state.data.gender}
                            state={this.state.status}
                        />
                )    
            case 1 :
                return(
                    <div style={{height: this.props.height , backgroundColor: '#212F3D'}}>
                        <div style={{ height:(this.props.height/2)-20}}>
                        </div>
                        <Button onClick={this.handleNextStatus} bsStyle='primary' bsSize='large'>START TEST</Button>
                    </div>
                )
            case 2 :
                return(
                    <div  style={{height: this.props.height ,  backgroundColor: '#212F3D'}} >
                        <div style={{height: this.props.height/3}}>
                        </div>
                        <Animation
                            handleNext={this.handleNextStatus}
                        />
                    </div>
                )
            case 3 :
                return <Question
                            height={this.props.height}
                            width={this.props.width}
                           handleNext={this.handleNextStatus}
                            
                        />;

            case 4 :
                return <Result
                            height={this.props.height}
                            handleFinish={this.handleFinishTest}
                        />;
            case -1 : 
//                return <Info/>
            default :
                return <div> <h1> error not valid state </h1> </div>
        }
    
    }

}
