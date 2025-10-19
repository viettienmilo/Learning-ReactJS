import { useState } from 'react'
import './App.css'

function App() {

  function signUp(formData) {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const description = formData.get("description");
    // const gender = formData.get("gender");
    // const dietaryRestrictions = formData.getAll("dietary");
    // const favColor = formData.get("favColor");
    // console.log(email);
    // console.log(password);
    // console.log(description);
    // console.log(gender);
    // console.log(dietaryRestrictions);
    // console.log(favColor);
    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll("dietary");
    const fullData = { ...data, dietary: dietaryData };
    console.log(fullData);
  }
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" defaultValue="joe@schmoe.com" />
        <br />
        <label htmlFor='password'>Password:</label>
        <input id='password' name='password' type='password' />
        <br />
        <label htmlFor='description'>Description:</label>
        <textarea id='description' name='description' defaultValue="some details" />
        <br />
        <fieldset>
          <legend>Gender</legend>
          <label><input type='radio' name='gender' value='male' defaultChecked={true} />Male</label>
          <label><input type='radio' name='gender' value='female' />Female</label>
        </fieldset>
        <fieldset>
          <legend>Dietary restrictions</legend>
          <label><input type='checkbox' name='dietary' value='vegan' defaultChecked={true} />Vegan</label>
          <label><input type='checkbox' name='dietary' value='gluten-free' />Gluten-free</label>
        </fieldset>
        <label htmlFor='favColor'>What is your favorite color?</label>
        <select id='favColor' name='favColor' defaultValue="" required>
          <option value="" disabled>--Choose a color--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <button type='submit'>Sign up</button>
      </form>
    </section >
  )
}

export default App
