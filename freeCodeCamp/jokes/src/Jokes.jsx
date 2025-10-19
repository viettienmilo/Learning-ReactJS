import { useState } from "react"

export default function Jokes(props) {
    const { setup, punchline } = props;
    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        setIsShown(prev => prev = !prev);
    }

    return (
        <div style={{ textAlign: "left" }}>
            {setup && <h3>{setup}</h3>}
            {isShown && <p>{`Punchline: ${punchline}`}</p>}
            <button type="button" onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </div>
    );
}