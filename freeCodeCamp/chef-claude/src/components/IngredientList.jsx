export default function IngredientList(props) {
    const { ingredients, getRecipe, recipeSection } = props

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul aria-label="polite">
                {ingredients.map(item => <li key={item}>{item}</li>)}
            </ul>
            {ingredients.length > 3 &&
                <div className='get-recipe-container'>
                    <div ref={recipeSection}>
                        <h3>Ready for recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    );
}