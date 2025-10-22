import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Status from './components/Status.jsx';
import Languages from './components/Languages.jsx';
import Word from './components/Word.jsx';
import Keyboard from './components/Keyboard.jsx';

function App() {
  const [currentWord, setCurrentWord] = useState("refactor");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <>
      <Header />
      <Status />
      <Languages />
      <section className='current-word'>
        {currentWord.split("").map((word, index) => <Word key={index} word={word} />)}
      </section>
      <section className='keyboard'>
        {alphabet.split("").map(char => <Keyboard key={char} char={char} />)}
      </section>
      <button className='new-game'>New Game</button>
    </>
  )
}

export default App
