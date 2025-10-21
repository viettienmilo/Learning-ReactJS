export default function Dice(props) {

    const { id, value, isHeld } = props.dice;
    const diceClick = props.diceClick;

    return (
        <button className={isHeld ? "held-dice" : ""} onClick={() => diceClick(id)}>{value}</button>
    );
}