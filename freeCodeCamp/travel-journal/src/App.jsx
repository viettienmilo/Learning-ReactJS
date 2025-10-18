import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import journalData from './data.js';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        {
          journalData.map(journal =>
            <Entry
              key={journal.id}
              {...journal}
            />
          )
        }
      </main>
    </>
  )
}

export default App
