import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    const { recipe } = props;
    return (
        <section className="suggested-recipe-container" aria-live='polite'>
            <h2>Chef Claude recommends:</h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    );
}