import './Dice.css';
const Pip = () => <span className="pip" />;
const Face = ({ children }) => <div className="face">{children}</div>;

export default function Dice(props) {
    const { id, value, isHeld } = props.dice;
    const diceClick = props.diceClick;

    let pips = Array(value).fill(0).map((_, i) => <Pip key={i} />)

    return (
        <button className={isHeld ? "held-dice" : ""} onClick={() => diceClick(id)}>
            <Face>{pips}</Face>
        </button> //"held-dice" 
    );
}