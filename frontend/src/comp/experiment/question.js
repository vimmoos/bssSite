import React from 'react'
import {Button,ButtonToolbar,ProgressBar} from 'react-bootstrap'
import images from './../image.js'
import audios from './../audios.js'
const correctI = [ true,true,false,false,true,false,false,true,false,false,true,true,false,true,false,false,false,true,false,true,true,true,false,true,false,true,false,true,false,true]

const correctA= [ true,true,true,true,false,false,true,false,false,false,true,true,false,true,false,true,true,false,true,false,true,false,false,false,true,false,true,false,true,false]
const len = 29 // number of image in the set -1
export default class Question extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            resultI : 0,
            resultA : 0,
            disabled : false
        }
    }

    checkAnswer = (value,type) => {
        if (type === 'i') {
            console.log(value,correctI[this.state.index],this.state.index)
            if (value === correctI[this.state.index]) {
                this.setState({ resultI : this.state.resultI+1})
            }
        }else{
            console.log(value,correctA[this.state.index],this.state.index)
            if (value === correctA[this.state.index]) {
                this.setState({ resultA : this.state.resultA+1})
            }
        }
        if ( this.state.index === len ) {
        }
    }

    handleClickY = () => {
        let idx = this.state.index;
        if (this.props.type === 'i') {
            this.checkAnswer(true,'i')
            if (idx  >= len) {
                setTimeout(()=> {
                    this.props.handleResult(this.state.resultI)
                    this.props.handleNext()
                },500)
            }else{
                this.setState({ index : idx+1})
            }
        }else{
            this.checkAnswer(true,'a')
           if ( idx >= len) {
               setTimeout(()=>{
                    this.props.handleResult(this.state.resultA)
                   this.props.handleNext()

               },500)
           }else{
               this.setState({
                   index : idx+1 ,
                   disabled : true
               })
           }
        }
    }

    handleClickN = () => {
        let idx = this.state.index;
        if (this.props.type === 'i') {
            this.checkAnswer(false,'i')
            if ( idx >= len) {
                setTimeout(()=> {
                    this.props.handleResult(this.state.resultI)
                    this.props.handleNext()
                },500)
            }else{
                this.setState({index: idx+1})
            }
        }else{
            this.checkAnswer(false,'a')
           if ( idx >= len) {
               setTimeout(()=>{
                    this.props.handleResult(this.state.resultA)
                    this.props.handleNext()
               },500)
           }else{
                this.setState({
                   index : idx+1 ,
                   disabled : true
               })
           }
        }
    }

    handlePlay = () => {
        let audio = document.getElementById("audio")
        audio.play()
        this.setState({ disabled : false })
    }

    render(){
        const index = this.state.index
        let question
        if (this.props.type === 'i') {
            question =  <div>
                            <div style={{height : this.props.height/10}}>
                            </div>
                            <h1 style={{color : 'white'}}>Was this image shown before?</h1>
                            <img
                                style={{  height : 500}}
                                src={images[index]}
                                alt="images"
                            />
                        </div>
        }else{
            question =  <div>
                            <div style={{height : this.props.height/3}}>
                            </div>
                            <h1 style={{color : 'white'}}>Was this sound played before?</h1>
                            <audio
                                id="audio"
                                src={audios[index]}
                            >
                                The Browser do not support the audio tag
                            </audio>
                            <Button
                                onClick={this.handlePlay}
                                bsStyle='primary'
                                bsSize='large'
                            > PLAY
                            </Button>
                            <div style={{height : this.props.height/6}}>
                            </div>
                        </div>
        }
        return (
            <div style={{height: this.props.height , backgroundColor: '#212F3D'}}>
                {question}
                <ButtonToolbar style={{marginLeft:(this.props.width/2)-250}}>
                    <Button
                        style={{marginRight:375}}
                        onClick={this.handleClickY}
                        bsStyle='primary'
                        bsSize='large'
                        disabled={this.state.disabled}
                    >
                        Yes
                    </Button>{' '}
                    <Button
                        onClick={this.handleClickN}
                        bsStyle='primary'
                        bsSize='large'
                        disabled={this.state.disabled}
                    >
                        No
                    </Button>
                </ButtonToolbar>
            <ProgressBar striped now={this.state.index*3.4} style={{bottom:0 , position: 'fixed' , width: this.props.width}} />
            </div>
        )
    }
}
