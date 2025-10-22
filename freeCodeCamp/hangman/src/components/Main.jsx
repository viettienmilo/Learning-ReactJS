import { useState } from 'react'
export default function Main() {
    const [currentWord, setCurrentWord] = useState("refactor");

    return (
        <main>
            <section className='current-word'>
                {currentWord.split("").map((word, index) =>
                    <span key={index}>
                        {word}
                    </span>
                )}
            </section>
        </main>
    );
}