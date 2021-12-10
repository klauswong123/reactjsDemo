
// Importing combination
import React, {Component} from 'react';
// Importing Module
import ReactDOM from 'react-dom';
import Demo from './demo.js';
// Importing CSS
import './index.css';

 
class App extends Component {
  render()
  {
      return (<div>
      <Demo title="GeeksforGeeks" /></div>);
  }
}

ReactDOM.render(
<App/>,
document.getElementById('root')
);
