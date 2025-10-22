import { useState, useRef, useEffect } from 'react'
import './App.css'
import Dice from './components/Dice.jsx';
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';

function App() {
  const [faces, setFaces] = useState(() => genRandomFaces());
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const newGameRef = useRef(null);

  const gameWon = faces.every(({ isHeld, value }) => (isHeld === true && value === faces[0].value));

  // generate all 10 dices with random face
  function genRandomFaces() {
    let values = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
    return values.map(val => ({ id: nanoid(), value: val, isHeld: false }));
  }

  function rerollDice() {
    if (gameWon) {
      setFaces(genRandomFaces()) // reset faces
      setCount(0); // reset counter
      setTime(0);  // reset timer
    }
    else {
      // random faces that not in hold state
      setFaces(prevFaces => prevFaces.map(prevFace => {
        return prevFace.isHeld ? prevFace : { ...prevFace, value: Math.ceil(Math.random() * 6) }
      })
      )
      setCount(prev => prev + 1); // increase counter
    }
  }

  function handleDiceClick(id) {
    // invert hold state of dice with id
    setFaces(prevFaces =>
      prevFaces.map(prevFace => { return prevFace.id === id ? { ...prevFace, isHeld: !prevFace.isHeld } : prevFace })
    );
  }

  useEffect(() => {
    if (gameWon) {
      newGameRef.current.focus(); // set focus to button to play new game
      clearInterval(intervalRef.current); // reset watchdog timer
    }
    else {
      clearInterval(intervalRef.current); // reset watchdog timer
      // start watchdog timer
      intervalRef.current = setInterval(() => setTime(prev => prev + 10), 10);
    }
    return () => clearInterval(intervalRef.current); // clean function
  }, [gameWon])

  // display watchdog timer in format '00:00'
  function formatTime(totalmillis) {
    const totalSecs = Math.floor(totalmillis / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
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
      <div className="counter-timer-container">
        <div>Counter: {count} </div>
        <div ref={intervalRef}>Timer: {formatTime(time)}</div>
      </div>
      <button ref={newGameRef} onClick={rerollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
