import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './datacollection.css';
import { getDatabase, ref, set } from 'firebase/database';

const healthOptions = [
  'alcohol-free', 'dairy-free', 'egg-free', 'fish-free', 'gluten-free',
  'keto-friendly', 'kidney-friendly', 'low-fat-abs', 'low-potassium',
  'low-sugar', 'no-oil-added', 'peanut-free', 'pescatarian',
  'pork-free (halal)', 'red-meat-free', 'sesame-free', 'soy-free',
  'sugar-conscious', 'tree-nut-free', 'vegan', 'vegetarian', 'wheat-free',
];

const DataCollection = () => {
  const [dietPreference, setDietPreference] = useState('Balanced');
  const [healthPreferences, setHealthPreferences] = useState([]);
  const [cuisinePreference, setCuisinePreference] = useState('American');
  const [mealTypePreference, setMealTypePreference] = useState('Breakfast');
  let navigate = useNavigate();

  const handleHealthButtonClick = (preference) => {
    setHealthPreferences(prev => {
      if (prev.includes(preference)) {
        return prev.filter(p => p !== preference);
      } else {
        return [...prev, preference];
      }
    });
  };

  const handleSubmit = () => {
    const db = getDatabase();
    // Replace colons and periods in the ISO string with underscores
    const datePath = new Date().toISOString().replace(/[\:\.]/g, '_');
    const preferencesRef = ref(db, 'preferences/' + datePath);
    set(preferencesRef, {
      diet: dietPreference,
      health: healthPreferences,
      cuisine: cuisinePreference,
      mealType: mealTypePreference
    }).then(() => {
      // Data saved successfully!
      navigate('/generate-recipes'); // Adjust the route as necessary
    }).catch((error) => {
      // The write failed...
      console.error("Error saving preferences: ", error);
    });
  };
  

  return (
    <div class="dataCollectionContainer">
      <h1 class="preferenceTitle">Choose Your Preferences</h1>
      <div className="dietBox">
        <h2>Diet</h2>
        <select id='dietpreferences' value={dietPreference} onChange={e => setDietPreference(e.target.value)}>
          <option value="Balanced">Balanced</option>
          <option value="High-Fiber">High-Fiber</option>
          <option value="High-Protein">High-Protein</option>
          <option value="Low-Carb">Low-Carb</option>
          <option value="Low-Fat">Low-Fat</option>
          <option value="Low-Sodium">Low-Sodium</option>
        </select>
      </div>
      <div className="healthBox">
        <h2>Health</h2>
        <div class="healthOptions">
          {healthOptions.map(option => (
            <button key={option} onClick={() => handleHealthButtonClick(option)} className={healthPreferences.includes(option) ? 'selected' : ''}>
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="cuisineType">
        <h2>Cuisine</h2>
        <select id='cuisinepreferences' value={cuisinePreference} onChange={e => setCuisinePreference(e.target.value)}>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Chinese">Chinese</option>
          <option value="French">French</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>
      <div className="mealTypeBox">
        <h2>Meal Type</h2>
        <select id='mealTypepreferences' value={mealTypePreference} onChange={e => setMealTypePreference(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
      <div className="submitBox">
        <button onClick={handleSubmit}>Generate Recipe</button>
      </div>
    </div>
  );
};

export default DataCollection;