import React from "react"
import video from './image03.mp4' 
import { Button,ProgressBar } from 'react-bootstrap'
export default class Video extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            time : 0,
            duration: 1
        }
    }

    componentDidMount(){
        this.handlePlay()
    }

    handlePlay = () => {
        let video = document.getElementById("video")
        video.play();
        console.log(video.duration)
        video.onended =()=> { this.props.handleNext()}
        video.ontimeupdate = () => { this.setState({ time : video.currentTime, duration : video.duration})} 
    }

    render(){
        console.log(this.state.time)
        console.log(this.state.duration)
        return(
            <div>
                <video id="video" src={video} style={{width: '50%'}}>
                    The Browser do not support the vide tag 
                </video>
                <ProgressBar striped now={(this.state.time*100)/this.state.duration} style={{ bottom:0 , position : 'fixed' , width: this.props.width}} />
            </div>
        )
    }

}
