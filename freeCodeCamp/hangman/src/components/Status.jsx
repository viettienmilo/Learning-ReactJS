export default function Status(props) {
    const { isWon, isOver, farewellText } = props
    let h1Text, pText;
    if (isWon) {
        h1Text = "You win!";
        pText = "Well done! 🎉";
    }
    else if (isOver) {
        h1Text = "Game Over!";
        pText = "You lose! Better start learning Assembly 😭";
    }
    else if (farewellText) {
        h1Text = "";
        pText = farewellText;
    }
    return (
        <>
            <h1>{h1Text}</h1>
            <p>{pText}</p>
        </>
    );
}