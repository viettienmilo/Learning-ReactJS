import { useState, useRef, useEffect } from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx';
import IngredientList from './IngredientList.jsx';
import { getRecipeFromMistral } from './../ai.js';

export default function Main() {
    const [ingredients, setIngredient] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient"); // "ingredient" : name of the input
        setIngredient(prev => [...prev, newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    useEffect(() => {
        recipeSection.current.scrollIntoView({ behavior: 'smooth' })
    }, [recipe, recipeSection.current])

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. Oregano"
                    aria-label="Add ingredient"
                    name="ingredient" id="" />
                <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList ingredients={ingredients} getRecipe={getRecipe} recipeSection={recipeSection} />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}