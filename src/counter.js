/* eslint-disable no-undef */
import React,{Component} from 'react';
import './App.css';



class Demo extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            firstNum: 5,
            secondNum: 2
        };
        
      }

  render() {
  return (
    <div className="App">
      <div className="app-title">
        <h1> Amazing Calculator </h1>
      </div>
      <div className="calculatorOut">
        <div id="outer">
            <button className='inner' onClick={() => this.setState({ firstNum:this.state.firstNum + 1 })}>+</button>
            <h2 className='inner numberWidth'>{ this.state.firstNum }</h2>
            <button className='inner' onClick={() => this.setState({ firstNum:this.state.firstNum - 1 })}>-</button>
        </div>
        <div id="outer">
            <button className='inner' onClick={() => this.setState({ secondNum:this.state.secondNum + 1 })}>+</button>
            <h2 className='inner numberWidth'>{ this.state.secondNum }</h2>
            <button className='inner' onClick={() => this.setState({ secondNum:this.state.secondNum - 1 })}>-</button>
        </div>
      </div>
      <div className="sumOut">
        <h1 >sum: { this.state.firstNum+this.state.secondNum}</h1>
      </div>
    </div>
  );
}
}

export default Demo;