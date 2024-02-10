const APP_ID = '348a4428'; // Your actual APP_ID
const APP_KEY = '2366e5c8e090e86fb5cc332b1af4aef2'; // Your actual APP_KEY
const BASE_URL = 'https://api.edamam.com/search';

const searchRecipes = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw to allow caller to handle
    }
};

export { searchRecipes };
