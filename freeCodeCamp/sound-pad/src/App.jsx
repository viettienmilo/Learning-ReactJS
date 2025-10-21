import { useState } from 'react'
import './App.css'
import soundpads from './pads.js';
import Pad from './Pad.jsx';

function App() {
  let [pads, setPads] = useState(soundpads);

  function toggle(id) {
    setPads(prevPads =>
      prevPads.map(pad => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      }))
  }
  return (
    <main>
      <div className="pad-container">
        {pads.map(pad => <Pad key={pad.id} pad={pad} toggle={toggle} />)}
      </div>
    </main>
  )
}

export default App
