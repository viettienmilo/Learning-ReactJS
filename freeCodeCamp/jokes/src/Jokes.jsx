export default function Jokes(props) {
    const { setup, punchline } = props;

    return (
        <div style={{ textAlign: "left" }}>
            <p>{`Setup: ${setup}`}</p>
            <p>{`Punchline: ${punchline}`}</p>
            <hr />
        </div>
    );
}