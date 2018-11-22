import React from "react"
import images from './image.js' 
import { Button } from 'react-bootstrap'
export default class Animation extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.state = { 
            index:0,
            cnt:0,
        }

    }

    componentDidMount(){
        this.next();
    }

    next(){
        setTimeout(() => {
            let cnt = this.state.cnt+1;
            this.setState({
                index: (this.state.index+1)%2,
                cnt 
            }) ; // %n where n in the number of images
            let _ = cnt%10 === 0 ? this.props.handleNext() : null ;
            this.next();
        },300);
    }

    render(){
        return(
            <img 
                style={{height: 'auto' , width : 'auto'}}
                src={images[this.state.index]}
                alt="images"
            />
        )
    }

}
