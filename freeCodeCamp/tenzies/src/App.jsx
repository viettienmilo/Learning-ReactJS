import { useState } from 'react'
import './App.css'
import Dice from './components/Dice.jsx';
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';

function App() {
  const [faces, setFaces] = useState(() => genRandomFaces());
  const gameWon = faces.every(({ isHeld, value }) => (isHeld === true && value === faces[0].value));

  function genRandomFaces() {
    let values = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
    return values.map(val => ({ id: nanoid(), value: val, isHeld: false }));
  }

  function rerollDice() {
    if (gameWon) {
      setFaces(genRandomFaces())
    }
    else {
      setFaces(prevFaces => prevFaces.map(prevFace => {
        return prevFace.isHeld ? prevFace : { ...prevFace, value: Math.ceil(Math.random() * 6) }
      })
      )
    }
  }

  function handleDiceClick(id) {
    setFaces(prevFaces =>
      prevFaces.map(prevFace => { return prevFace.id === id ? { ...prevFace, isHeld: !prevFace.isHeld } : prevFace })
    );

  }

  return (
    <main>
      {gameWon && <ReactConfetti />}
      <div className="title">
        <h2>Tenzies</h2>
        <span>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</span>
      </div>
      <div className='dice-container'>
        {faces.map(obj => <Dice dice={obj} key={obj.id} diceClick={handleDiceClick} />)}
      </div>
      <button onClick={rerollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
