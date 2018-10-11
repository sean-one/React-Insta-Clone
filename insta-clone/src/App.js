import React from 'react';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Authenticate />
      </div>
    );
  }
}

export default App;
