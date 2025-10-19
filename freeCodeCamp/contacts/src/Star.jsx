import { useState } from 'react'
import starFilled from "../src/assets/star-filled.png"
import starEmpty from "../src/assets/star-empty.png"

export default function Star(props) {
    const { isFilled, handleClick } = props;

    return (
        <button
            onClick={handleClick}
            aria-pressed={isFilled}
            aria-label={isFilled ? "Remove from favorite" : "Add to favorite"}
            className="favorite-button"
            type="button">
            <img
                src={isFilled ? starFilled : starEmpty}
                alt={isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}