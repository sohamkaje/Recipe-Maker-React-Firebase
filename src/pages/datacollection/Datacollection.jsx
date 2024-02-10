import { useNavigate, Link } from 'react-router-dom';
import './datacollection.css';

const datacollection = () => {
  return (
    <div class co>
      <h1>Choose Your Preferences</h1>
      <div class="dietBox">
        <h2>Diet</h2>
        <select id='dietpreferences'>
          <option>Balanced</option>
          <option>High-Fiber</option>
          <option>high-protein</option>
          <option>low-carb</option>
          <option>low-fat</option>
          <option>low-sodium</option>
        </select>
      </div>
      <div class="healthBox">
        <h2>Health</h2>
        <button>alcohol-free</button>
        <button>dairy-free</button>
        <button>egg-free</button>
        <button>fish-free</button>
        <button>gluten-free</button>
        <button>keto-friendly</button>
        <button>kidney-friendly</button>
        <button>low-fat-abs</button>
        <button>low-potassium</button>
        <button>low-sugar</button>
        <button>no-oil-added</button>
        <button>peanut-free</button>
        <button>pescatarian</button>
        <button>pork-free (halal)</button>
        <button>red-meat-free</button>
        <button>sesame-free</button>
        <button>soy-free</button>
        <button>sugar-conscious</button>
        <button>tree-nut-free</button>
        <button>vegan</button>
        <button>vegetarian</button>
        <button>wheat-free</button>
      </div>
      <div class="cuisineType">
        <h2>Cuisine</h2>
        <select id='cuisinepreferences'>
          <option>American</option>
          <option>Asian</option>
          <option>Caribbean</option>
          <option>Central Europe</option>
          <option>Chinese</option>
          <option>Eastern Europe</option>
          <option>French</option>
          <option>Indian</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>Mediterranean</option>
          <option>Mexican</option>
          <option>Middle Eastern</option>
          <option>Nordic</option>
          <option>South American</option>
          <option>South East Asian</option>
        </select>
      </div>
      <div class="mealTypeBox">
        <h2>Diet</h2>
        <select id='mealTypepreferences'>
          <option>Balanced</option>
          <option>High-Fiber</option>
          <option>high-protein</option>
          <option>low-carb</option>
          <option>low-fat</option>
          <option>low-sodium</option>
        </select>
      </div>
      <div class="submitBox">
        <button>Generate Recipe</button>
      </div>
    </div>
  )
}

export default datacollection;