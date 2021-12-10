/* eslint-disable no-undef */
import React,{Component} from 'react';
import './App.css';



class Demo extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            upperNum: 5,
            lowerNum: 2
        };
        
      }

  IncrementUpperItem = () => {
    this.setState({ upperNum: this.state.upperNum + 1 });
  }

  DecreaseUpperItem = () => {
    this.setState({ upperNum: this.state.upperNum - 1 });
  }

  IncrementLoweItem = () => {
    this.setState({ lowerNum: this.state.lowerNum + 1 });
  }

  DecreaseLoweItem = () => {
    this.setState({ lowerNum: this.state.lowerNum - 1 });
  }

  render() {
  return (
    <div className="App">
      <div className="app-title">
        <h1> Amazing Calculator </h1>
      </div>
      <div className="calculatorOut">
        <div id="outer">
            <button className='inner' onClick={this.IncrementUpperItem}>+</button>
            <h2 className='inner numberWidth'>{ this.state.upperNum }</h2>
            <button className='inner' onClick={this.DecreaseUpperItem}>-</button>
        </div>
        <div id="outer">
            <button className='inner' onClick={this.IncrementLoweItem}>+</button>
            <h2 className='inner numberWidth'>{ this.state.lowerNum }</h2>
            <button className='inner' onClick={this.DecreaseLoweItem}>-</button>
        </div>
      </div>
      <div className="sumOut">
        <h1 >sum: { this.state.upperNum+this.state.lowerNum}</h1>
      </div>
    </div>
  );
}
}

export default Demo;