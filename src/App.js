import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Panel ,Button } from 'react-bootstrap'; 
import Expe from './comp/experiment/expe.js';
import Animation from './comp/animation.js'
class App extends Component {
    constructor(props){
        super(props);
    

        this.state={
            width: 0,
            height:0,
        }
    }
    componentDidMount(){
      this.updateWindowDimensions()
      window.addEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions = () =>{
        this.setState({width: window.innerWidth,height: window.innerHeight})
    }


  render() {
    return (
      <div className="App">
        <Expe 
            width={this.state.width} 
            height={this.state.height}
        />
      </div>
    );
  }
}

export default App;
