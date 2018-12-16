import React from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import audio from './../compactSound.mp3'
export default class Animation extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            disable: false,
            time : 0,
            duration : 0,
        }
    }
    
    componentDidMount(){
        this.handlePlay() 
    }

    handlePlay = () => {
        let audio = document.getElementById("audio")
        audio.play();
        this.setState({ disable : !this.state.disable , duration : audio.duration})
        audio.onended = () => { this.props.handleNext()}
        
        audio.ontimeupdate = () => { this.setState({ time : audio.currentTime, duration : audio.duration})} 
    }

    render(){
        console.log(this.state.duration)
        return(
            
            <div>
                <audio id="audio" src={audio}>
                    The Browser do not support the audio tag
                </audio>
                <Button 
                    onClick={this.handlePlay} 
                    bsStyle='primary' 
                    bsSize='large' 
                    disabled={this.state.disable}
                >
                    PLAY
                </Button>
            <ProgressBar  striped now={(this.state.time*100)/this.state.duration} style={{bottom:0 , position: 'fixed' , width: this.props.width}} /> 
           </div>
        )
    }
}
