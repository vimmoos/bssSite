import React from 'react'
import Home from './home.js'
import Video from './../video.js'
import Audio from './audio.js'
import Result from './result.js'
import Question from './question.js'
import testaudio from './../testaudio2.mp3'
import FormComponent from './form.js'
import axios from 'axios'
import {Button,ProgressBar} from 'react-bootstrap'
const def = "male"
const ip ='http://localhost:3001' 
export default class Expe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status: 0,
            disabled: true,
            data: {
                other : undefined,
                age: undefined,
                gender:def,
                resultA:0,
                resultI:0,
            }
        }
    }    
    
    handlePlay = () => {
        let audio = document.getElementById("audio")
        audio.play();
    }

    handleNextStatus = () => {
        this.setState({status: this.state.status+1})
    }

    handleBackHome = () => {
        this.setState({status: 0})
    }

    handleFinishTest = () => {
        const data = this.state.data
        axios.post(ip + "/submit" ,{data})
            .then(res => {
                console.log(res)
                console.log(res.data)
            }).catch(err=>{
              console.log(err)  
            })
    }

    handleInfo = () => {
        this.setState({status: -1})
    }

    handleForm = (data) => {
        this.setState({data})
    }
    
    handleResultA = (resultA) => {
        this.setState({ 
            data:
                {
                    other : this.state.data.other,
                    gender: this.state.data.gender,
                    age : this.state.data.age,
                    resultI: this.state.data.resultI,
                    resultA: resultA,
                }
        })
    }

    handleResultI = (resultI) => {
        this.setState({ 
            data:
                {
                    other : this.state.data.other,
                    gender: this.state.data.gender,
                    age : this.state.data.age,
                    resultI: resultI,
                    resultA: this.state.data.resultA,
                }
        })
    }

    handleDis = () => {
        if (this.state.data.other !== undefined && this.state.data.age !== undefined) {
            this.setState({ disabled : false})
        }
    }
    
    handleAge= (e) => {
        this.setState({ 
            data:
                {
                    other:this.state.data.other,
                    gender:this.state.data.gender,
                    age: e.target.value,
                    resultA : this.state.data.resultA,
                    resultI : this.state.data.resultI
                }
        });
        this.handleDis()
    }

    handleGender = (e) => {
        this.setState({
            data : 
                {
                    other:this.state.data.other,
                    age : this.state.data.age,
                    gender: e.target.value,
                    resultA : this.state.data.resultA,
                    resultI : this.state.data.resultI
                }
        });
        this.handleDis()
    }

    handleOther = (e) => {
        this.setState({
            data:
                {
                    age: this.state.data.age,
                    gender: this.state.data.gender,
                    other : e.target.value,
                    resultA : this.state.data.resultA,
                    resultI : this.state.data.resultI
                }
        });
        this.handleDis()
   }



    render() {
        const state = this.state.status;
        let active 

        switch (state) {
            case 0 :
                return  (
                        <Home 
                            disabled={this.state.disabled}
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
                        <div style={{ height:(this.props.height/7)-20}}>
                        </div>
                        <pre style={{color : 'white ',fontSize : 'large', backgroundColor: '#212F3D'}}>
                        <br/>
                        <h3>Thank you for participating in this experiment! </h3>
                        <br/>
                        This experiment will consist of two parts: a visual part, followed by an auditory part. <br/>
                        <br/>
                        Once you click the button below the experiment will begin immediately, so be prepared. <br/>
                        <br/>
                        30 images will flash by at very high speed, do not look away until all images have flashed by. <br/>
                        <br/>
                        Next, you will be asked 30 times whether you’ve seen a certain image before. <br/>
                        <br/>
                        Answer to the best of the ability, and if you really have no idea, guess. <br/>
                        <br/>
                        Once you’ve answered all 30 questions, the auditory part will begin. More instructions will follow at that part.<br/>
                        <br/>
                    </pre>
                        <Button onClick={this.handleNextStatus} bsStyle='primary' bsSize='large'>START TEST</Button>
                    </div>
                )
            case 2 :
                return(
                    <div  style={{height: this.props.height ,  backgroundColor: '#212F3D'}} >
                        <div style={{height: this.props.height/5}}>
                        </div>
                        <Video
                            width={this.props.width}
                            handleNext={this.handleNextStatus}
                        />
                    </div>
                )
            case 3 : 
                return <Question
                            height={this.props.height}
                            width={this.props.width}
                            handleNext={this.handleNextStatus}
                            type={'i'}
                            handleResult={this.handleResultI}
                        />
            case 4:
                return (
                    <div style={{height: this.props.height , backgroundColor: '#212F3D'}}>
                        <div style={{ height:(this.props.height/7)-20}}>
                        </div>
                        <pre style={{color : 'white ',fontSize : 'large', backgroundColor: '#212F3D'}}>
                        <br/>
                        You have completed the visual part of the experiment. <br/>
                        <br/>
                        The auditory part will now begin. <br/>
                        <br/>
                        Make sure you can clearly hear the sounds, so sit in a quiet environment or wear headphones. <br/>
                        <br/>
                        <audio id="audio" src={testaudio}>
                            The Browser does not support the audio tag
                        </audio><Button onClick={this.handlePlay} bsStyle='primary' bsSize='medium'>SOUND TEST</Button>
                        <br/>
                        <br/>
                        If you cannot listen to the sounds, please do not continue the experiment.<br/>
                        <br/>

                        First, 30 short sound clips will be played in quick succession.<br/>
                        <br/>
                        Afterwards, just like before, you will be asked 30 times whether you’ve heard a certain sound before. <br/>
                        <br/>
                        Once you’ve answered all 30 questions, the experiment will end and your results will be shown.<br/>
                        <br/>
                        </pre>
                        <Button onClick={this.handleNextStatus} bsStyle='primary' bsSize='large'> PLAY </Button>
                    </div>
                )
            case 5: 
                return (
                    <div style={{height: this.props.height , backgroundColor: '#212F3D'}}>
                        <div style={{height: this.props.height/2}}>
                        </div>
                        <Audio
                            width={this.props.width}
                            handleNext={this.handleNextStatus}
                        />
                    </div>
                )
            case 6 :
                return <Question
                            type={'a'}
                            height={this.props.height}
                            width={this.props.width}
                            handleNext={this.handleNextStatus}
                            handleResult={this.handleResultA}
                        />;

            case 7 :
                return <Result
                            resultI={this.state.data.resultI}
                            resultA={this.state.data.resultA}
                            height={this.props.height}
                            handleFinish={this.handleFinishTest}
                            handleBackHome={this.handleBackHome}
                        />;
            case -1 : 
//                return <Info/>
            default :
                return <div> <h1> error not valid state </h1> </div>
        }
    
    }

}
