import { useState } from 'react'
import avatar from "../src/assets/user.png"

import './App.css'
import Star from './Star.jsx';

function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    setContact(prevContact => ({ ...prevContact, isFavorite: !prevContact.isFavorite }))
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">

          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />

          <h2 className="name">
            {`${contact.firstName} ${contact.lastName}`}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}

export default App
