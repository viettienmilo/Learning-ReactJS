import { useState } from 'react'

export default function Main() {
    let [ingredients, setIngredient] = useState(["Chicken", "Oregano", "Tomatoes"])

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient"); // "ingredient" : name of the input
        setIngredient(prev => [...prev, newIngredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. Oregano"
                    aria-label="Add ingredient"
                    name="ingredient" id="" />
                <button type="submit">Add ingredient</button>
            </form>
            <ul className="ingredient-list">
                {ingredients.map(item => <li key={item}>{item}</li>)}
            </ul>
        </main>
    );
}