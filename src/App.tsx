import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age: 36,
      note: 'Allegeric to staying on the same team'
    },
    {
      name: "Kobe Bryant",
      age: 42,
      url: "https://cdn.cnn.com/cnnnext/dam/assets/200126210422-27-kobe-bryant-gallery-restricted-exlarge-169.jpg"
    }
  ])


  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
