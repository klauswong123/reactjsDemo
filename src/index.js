
// Importing combination
import React, {Component} from 'react';
// Importing Module
import ReactDOM from 'react-dom';
import Counter from './counter.js';
// Importing CSS
import './index.css';

 
class App extends Component {
  render()
  {
      return (<div>
      <Counter title="GeeksforGeeks" /></div>);
  }
}

ReactDOM.render(
<App/>,
document.getElementById('root')
);
