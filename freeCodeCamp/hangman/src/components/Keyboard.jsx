import clsx from "clsx";

export default function Keyboard(props) {
    const { letter, click, status: { isCorrect, isWrong }, isDone } = props;
    return (
        <button
            className={clsx({ 'is-correct': isCorrect, 'is-wrong': isWrong })}
            onClick={() => click(letter)}
            disabled={isDone}>
            {letter}
        </button>
    )
}