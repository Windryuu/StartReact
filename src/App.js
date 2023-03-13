import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import StockedText from './components/StockedText';
import ThreeTimesSeven from './components/ThreeTimesSeven';
import TwoWords from './components/TwoWords';
import CompOfComps from './components/CompOfComps';
import TenTable from './components/TenTable';
import TenTableTwo from './components/TenTableTwo';

function App() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    document.title=`you clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to make the world explode.
        </p>
        <p>
          Then penguin will dance on nuclear beaches
        </p>
        <p>
          Bruuuuuuuuuuuuuuh ... What sh*t u sayin' ?
        </p>
        <p>
          My girl called Clitorine duh :o
        </p>
        <button onClick={()=>setCount(count +1)}>
          Click me coward !
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StockedText />
        <ThreeTimesSeven/>
        <TwoWords/>
        <CompOfComps/>
        <TenTableTwo/>
        <TenTable/>
      </header>
    </div>
  );
}

export default App;
