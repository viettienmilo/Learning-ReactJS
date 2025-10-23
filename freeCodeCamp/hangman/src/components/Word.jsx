import clsx from "clsx";

export default function Word(props) {
    const { word, incompleted } = props.word;

    return (
        <span className={clsx({ 'word-incompleted': incompleted })}>{word}</span>
    );
}