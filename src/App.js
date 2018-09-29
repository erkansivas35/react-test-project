import React, { Component } from 'react';

//components
import Main from './Components/Main'
import Menu from './Components/Menu'

//styles
import './assets/css/index.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
