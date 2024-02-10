import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./datacollection.css";
import { getDatabase, ref, push } from 'firebase/database'; // Import Firebase database functions
import { app } from '../../Firebase/firebase.js'; // Make sure to import the Firebase app instance


const RecipeSearch = () => {
  // State hooks remain unchanged
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([]);
  const [cuisineType, setCuisineType] = useState([]);
  const [mealType, setMealType] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // API keys remain unchanged
  const app_id = '348a4428';
  const app_key = '2366e5c8e090e86fb5cc332b1af4aef2';

  const database = getDatabase(app); // Initialize the database with the Firebase app

  const handleSearch = () => {
    // API URL construction remains unchanged
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&diet=${diet.join()}&health=${health.join()}&cuisineType=${cuisineType.join()}&mealType=${mealType.join()}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data.hits); // Save fetched recipes to state
        // Save user preferences and recipes to Firebase Realtime Database
        saveToDatabase(diet, health, cuisineType, mealType, data.hits);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };

  // Function to save user preferences and recipes to Firebase
  const saveToDatabase = (diet, health, cuisineType, mealType, recipes) => {
    const preferencesRef = ref(database, 'userPreferences/'); // Define a path for user preferences
    const recipesRef = ref(database, 'generatedRecipes/'); // Define a path for generated recipes

    // Push user preferences to the database
    push(preferencesRef, { diet, health, cuisineType, mealType });

    // Push each recipe to the database
    recipes.forEach(recipe => {
      push(recipesRef, recipe.recipe);
    });
  };

  return (
    <div class="dataCollectionContainer">
      <div class="titleb">
        <h1 class="preferenceTitle">Choose Your Preferences</h1>
        <Link to="/">
          <button>Log Off</button>
        </Link>
      </div>

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
      </div>

      <ul class="recipes">
        {recipes.map((recipe, index) => (
          <li key={index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={recipe.recipe.image} 
                style={{ width: '200px', height: '200px', objectFit: 'cover'}}
              />
              <span>{recipe.recipe.label} -</span>
              <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                View Recipe
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;