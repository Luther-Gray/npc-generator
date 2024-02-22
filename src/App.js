import React from 'react';
import './App.css';
import './npcGenerator'
import NPCGenerator from './npcGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Character Generator
        </h2>
        <p className='quote'>Remember, these are just guidelines. Allow your creativity to twist the prompt past what you generated.</p>
        <hr className="headerSeperator"></hr>
        <NPCGenerator/>
      </header>
      <footer  className='appFooter'>
        <p className='footerText'>Credits: Galen Simmons | Github - <a href="https://github.com/123789g" target="_blank" rel="noopener noreferrer">123789g</a></p>
      </footer>
    </div>
  );
}

export default App;
