import { useState } from 'react'


export default function Pad(props) {
    const { id, color, on } = props.pad;
    const toggle = props.toggle;

    return (
        <button
            style={{ backgroundColor: color }}
            className={on ? "on" : ""}
            type="button"
            onClick={() => toggle(id)}
        ></button>
    );
}