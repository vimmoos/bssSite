import React from 'react'
import {Button,ButtonToolbar} from 'react-bootstrap'
import images from './../image.js'
const len = 2 // number of image in the set 
export default class Question extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            index: 0,
            result : 0
        }
    }

    handleClickY = () => {
        let idx = this.state.index+1;
        this.setState({ index : idx})
        if (idx  > len) {
            this.props.handleNext()
        }    
    }

    handleClickN = () => {
        let idx = this.state.index+1;
        this.setState({index: idx})
        if ( idx > len) {
            this.props.handleNext()
        }
    }

    render(){
        return (
            <div>
                <div style={{height : this.props.height/3}}>
                </div>
                <img
                    style={{ height: 'auto' , width : 'auto'}}
                    src={images[this.state.index]}
                    alt="images"
                />
                <ButtonToolbar style={{marginLeft: this.props.width/2}}>
                    <Button onClick={this.handleClickY} bsStyle='primary' bsSize='large'>
                        Yes
                    </Button>
                    <Button onClick={this.handleClickN} bsStyle='primary' bsSize='large'>
                        No
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }
}
