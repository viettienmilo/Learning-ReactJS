import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Main from './components/Main.jsx';
import NavBar from './components/NavBar.jsx';

function MainPage() {
  return (
    <>
      <NavBar />
      <Main />
    </>
  )
}

function App() {
  return (
    <MainPage />
  )
}

export default App
