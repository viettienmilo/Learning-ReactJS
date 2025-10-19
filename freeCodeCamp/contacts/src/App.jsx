import { useState } from 'react'
import avatar from "../src/assets/user.png"
import starFilled from "../src/assets/star-filled.png"
import starEmpty from "../src/assets/star-empty.png"
import './App.css'

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
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={contact.isFavorite ? "Remove from favorite" : "Add to favorite"}
            className="favorite-button"
            type="button"
          >
            <img
              src={contact.isFavorite ? starFilled : starEmpty}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className="favorite"
            />
          </button>
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
