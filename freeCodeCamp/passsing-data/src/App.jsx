import { useState } from 'react'
import './App.css'
import Header from './Header.jsx';
import Body from './Body.jsx';

function App() {
  const [userName, setUserName] = useState("Joe")

  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  )
}

export default App
