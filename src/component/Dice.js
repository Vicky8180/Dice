import React, { useState } from 'react';
import './Dice.css';
// import image from "./image"

function Dice() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`./image/${firstDieResult}.png`);
  const secondDieImage = require(`./image/${secondDieResult}.png`);


  function rollDice() {
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
          
        </div>
        <span>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDice}>Roll</button>
      </header>
    </div>
  );
}

export default Dice;
