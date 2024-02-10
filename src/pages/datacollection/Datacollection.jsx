import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./datacollection.css"

const RecipeSearch = () => {
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([]);
  const [cuisineType, setCuisineType] = useState([]);
  const [mealType, setMealType] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const app_id = '348a4428';
  const app_key = '2366e5c8e090e86fb5cc332b1af4aef2';

  let navigate = useNavigate();

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
        navigate('/recipe');
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };

  return (
    <div class="dataCollectionContainer">
      <h1 class="preferenceTitle">Choose Your Preferences</h1>

      <div class="optionBox">

        <div>
          <h2 class="preferenceOptions">Diet</h2>
          <div class="dataOptions">
            <select class="dataOptions" multiple value={diet} onChange={e => setDiet(Array.from(e.target.selectedOptions, option => option.value))}>
              <option value="balanced">Balanced</option>
              <option value="high-fiber">High Fiber</option>
              <option value="high-protein">High Protein</option>
              <option value="low-carb">Low Carb</option>
              <option value="low-fat">Low Fat</option>
              <option value="low-sodium">Low Sodium</option>
            </select>
          </div>
        </div>
        <div>
          <h2 class="preferenceOptions">Health</h2>
          <select class="dataOptions" multiple value={health} onChange={e => setHealth(Array.from(e.target.selectedOptions, option => option.value))}>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="alcohol-free">Alcohol-Free</option>
            <option value="dairy-free">Dairy-Free</option>
            <option value="egg-free">Egg-Free</option>
            <option value="fish-free">Fish-Free</option>
            <option value="gluten-free">Gluten-Free</option>
            <option value="keto-friendly">Keto-Friendly</option>
            <option value="kidney-friendly">Kidney-Friendly</option>
            <option value="low-fat-abs">Low-Fat-Abs</option>
            <option value="low-potassium">Low-Potassium</option>
            <option value="low-sugar">Low-Sugar</option>
            <option value="no-oil-added">No-Oil-Added</option>
            <option value="peanut-free">Peanut-Free</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="pork-free">Pork-Free (Halal)</option>
            <option value="red-meat-free">Red-Meat-Free</option>
            <option value="sesame-free">Sesame-Free</option>
            <option value="soy-free">Soy-Free</option>
            <option value="sugar-conscious">Sugar-Conscious</option>
            <option value="tree-nut-free">Tree-Nut-Free</option>
            <option value="wheat-free">Wheat-Free</option>
          </select>
        </div>

        <div>
          <h2 class="preferenceOptions">Cuisine</h2>
          <select class="dataOptions" multiple value={cuisineType} onChange={e => setCuisineType(Array.from(e.target.selectedOptions, option => option.value))}>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="British">British</option>
            <option value="Caribbean">Caribbean</option>
            <option value="Central Europe">Central Europe</option>
            <option value="Chinese">Chinese</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="French">French</option>
            <option value="Japanese">Japanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Nordic">Nordic</option>
            <option value="South American">South American</option>
            <option value="South East Asian">South East Asian</option>
          </select>
        </div>

        <div>
          <h2 class="preferenceOptions">Meal Type</h2>
          <select class="dataOptions" multiple value={mealType} onChange={e => setMealType(Array.from(e.target.selectedOptions, option => option.value))}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>
      </div>
      <div class="buttonBox">
        <button onClick={handleSearch}>Search Recipes</button>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.recipe.label}</li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default RecipeSearch;
