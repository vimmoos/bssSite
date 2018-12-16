import React from "react"
import images from './image.js' 
import { Button } from 'react-bootstrap'
import config from "../config.js"

const delay = config.delay// [ms]
export default class Animation extends React.Component{

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.state = { 
            index:-1,
        }

    }

    componentDidMount(){
        this.next();
    }

    
    next(){
        let index = this.state.index + 1
        setTimeout(() => {
            this.setState({
                index
            })  // %n where n in the number of images
            let _ = index === 9 ? 
                setTimeout(()=>{this.props.handleNext()},delay+70)
                :
                this.next(); 
        },delay);
    }

    render(){
        let main
        if (this.state.index == -1){
            main = <p> wait... </p>
        }else{
            main = <img 
                style={{ width : 500}}
                //style={{height: 'auto' , width : 'auto'}}
                src={images[this.state.index]}
                alt="images"
            />
        }
        return(
            main
        )
    }

}
