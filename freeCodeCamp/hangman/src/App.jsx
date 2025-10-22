import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Status from './components/Status.jsx';
import Languages from './components/Languages.jsx';
import Main from './components/Main.jsx';

function App() {

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Main />
    </>
  )
}

export default App
