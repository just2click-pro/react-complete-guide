import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Dror', age: 48 },
      { name: 'Adi', age: 44 },
      { name: 'Roey', age: 17 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // Don't Do This! this.state.persons[0].name = 'Dror Avidov'
    setPersonsState({
      persons: [
        { name: 'Dror Avidov', age: 48 },
        { name: 'Adi', age: 44 },
        { name: 'Roey', age: 17 }
      ],
      otherState: personsState.otherState
    });
  }

    return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age } />
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age } />
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }>
      I Love reading
      </Person>
    </div>
  )
}

export default App;