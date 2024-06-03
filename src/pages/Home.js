// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recipes')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Hier die Daten ausgeben
        setRecipes(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Rezepte</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="border p-4 rounded-lg">
            <Link to={`/recipe/${recipe.id}`}>
              <h2 className="text-xl font-bold">{recipe.name}</h2>
              <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
