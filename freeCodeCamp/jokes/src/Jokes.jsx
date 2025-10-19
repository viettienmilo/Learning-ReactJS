export default function Jokes(props) {
    const { setup, punchline, upvotes, downvotes, isPun } = props;

    return (
        <div style={{ textAlign: "left" }}>
            <p>{`Setup: ${setup}`}</p>
            <p>{`Punchline: ${punchline}`}</p>
            <span>{`Upvotes: ${upvotes} - Downvotes: ${downvotes}`}</span><br />
            <p>{`Pun: ${isPun ? "Yes" : "No"}`}</p>
            <hr />
        </div>
    );
}