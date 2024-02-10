import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  // Use the useLocation hook to access the state passed from the RecipeSearch component
  const location = useLocation();
  const recipes = location.state ? location.state.recipes : [];

  return (
    <div>
      <h1>Generated Recipes</h1>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.recipe.label}</h2>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ maxWidth: '100px' }}/>
              <p>{recipe.recipe.cuisineType.join(', ')}</p> {/* Example to show cuisine type if available */}
              {/* Add more recipe details you wish to display */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found. Try adjusting your search criteria.</p>
      )}
    </div>
  );
};

export default Home;
