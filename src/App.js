import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Dror" age="48" />
        <Person name="Roey" age="17">I Love reading</Person>
        <Person name="Jordan" age="16"/>
      </div>
    )
  }
}

export default App;
