import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Status from './components/Status.jsx';
import { languages } from './languages.js';
import Languages from './components/Languages.jsx';
import Word from './components/Word.jsx';
import Keyboard from './components/Keyboard.jsx';
import clsx from 'clsx';
import { getFarewellText, getRandomWord } from './utils.js';
import ReactConfetti from 'react-confetti';

function App() {
  // state values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [farewellText, setFarewellText] = useState("");
  // static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // derived values (from state values)
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;

  const isGameWon = (guessedLetters.length - wrongGuessCount) >= currentWord.length;
  const isGameOver = wrongGuessCount >= languages.length - 1;
  const isGameDone = isGameWon || isGameOver;

  useEffect(() => {
    if (wrongGuessCount > 0) { setFarewellText(getFarewellText(languages[wrongGuessCount - 1].name)); }
  }, [wrongGuessCount])

  function addGuessedLetter(letter) {
    setGuessedLetters(prevGuessedLetters =>
      prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
  }

  function resetGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
    setFarewellText("");

  }

  return (
    <>
      {isGameWon && <ReactConfetti recycle={false} numberOfPieces={1000} />}
      <Header />
      <section className={clsx('game-status', { 'win': isGameWon, 'lose': isGameOver, 'farewell': !isGameDone && (wrongGuessCount > 0) })}>
        <Status isWon={isGameWon} isOver={isGameOver} farewellText={farewellText} />
      </section>

      <section className="languages">
        {languages.map((lang, index) =>
          <Languages
            key={lang.name}
            language={lang}
            classname={clsx({ 'lost': index < wrongGuessCount })} />)}
      </section>

      <section className='current-word'>
        {currentWord.split("").map((word, index) => {
          if (!isGameOver) {
            return <Word key={index} word={guessedLetters.includes(word) ? { word, incompleted: false } : ""} />;
          }
          else {
            return <Word key={index} word={!guessedLetters.includes(word) ? { word, incompleted: true } : { word, incompleted: false }} />;
          }
        })
        }
      </section>
      <section className='keyboard'>
        {alphabet.split("").map(letter => {
          const isSelected = guessedLetters.includes(letter);
          const isCorrect = isSelected && currentWord.includes(letter);
          const isWrong = isSelected && !currentWord.includes(letter);
          return <Keyboard key={letter} letter={letter} click={addGuessedLetter} status={{ isCorrect, isWrong }} isDone={isGameDone} />
        })
        }
      </section>
      {isGameDone && <button className='new-game' onClick={resetGame}>New Game</button>}
    </>
  )
}

export default App
