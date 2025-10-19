import { useState } from "react"

function App() {
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

  let [myFavoriteThings, setMyFavoriteThings] = useState(["💦🌹", "😺",]);
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(prevFavoriteThings => [...prevFavoriteThings, allFavoriteThings[prevFavoriteThings.length]]);
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}

export default App
