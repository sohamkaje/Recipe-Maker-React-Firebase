import React, { useState } from 'react';

const RecipeSearch = () => {
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([]);
  const [cuisineType, setCuisineType] = useState([]);
  const [mealType, setMealType] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const app_id = '348a4428';
  const app_key = '2366e5c8e090e86fb5cc332b1af4aef2';

  const handleSearch = () => {
    // Construct the URL for the Edamam Recipe API based on user-selected parameters
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&diet=${diet.join()}&health=${health.join()}&cuisineType=${cuisineType.join()}&mealType=${mealType.join()}`;

    // Make a GET request to the API endpoint
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data.hits); // Assuming the structure of data is an array of hits containing recipes
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };

  return (
    <div>
      <h1 class="preferenceTitle">Choose Your Preferences</h1>
      {/* User input for diet preferences */}
      <select multiple value={diet} onChange={e => setDiet(Array.from(e.target.selectedOptions, option => option.value))}>
        <option value="balanced">Balanced</option>
        <option value="high-fiber">High Fiber</option>
        <option value="high-protein">High Protein</option>
        <option value="low-carb">Low Carb</option>
        <option value="low-fat">Low Fat</option>
        <option value="low-sodium">Low Sodium</option>
        {/* Add more diet options here */}
      </select>

      {/* User input for health preferences */}
      <select multiple value={health} onChange={e => setHealth(Array.from(e.target.selectedOptions, option => option.value))}>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        {/* Add more health options here */}
      </select>

      {/* User input for cuisine type */}
      <select multiple value={cuisineType} onChange={e => setCuisineType(Array.from(e.target.selectedOptions, option => option.value))}>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        {/* Add more cuisine type options here */}
      </select>

      {/* User input for meal type */}
      <select multiple value={mealType} onChange={e => setMealType(Array.from(e.target.selectedOptions, option => option.value))}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        {/* Add more meal type options here */}
      </select>

      {/* Button to trigger the recipe search */}
      <button onClick={handleSearch}>Search Recipes</button>

      {/* Display the list of recipes */}
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.recipe.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;
