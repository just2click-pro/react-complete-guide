import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Dror', age: 48 },
      { name: 'Adi', age: 44 },
      { name: 'Roey', age: 17 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } />
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }>
        I Love reading
        </Person>
      </div>
    )
  }
}

export default App;
