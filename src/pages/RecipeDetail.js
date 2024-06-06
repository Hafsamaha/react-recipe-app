import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data))
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">Zutaten</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-2">Zubereitung</h2>
      <ol className="list-decimal pl-5">
        {recipe.steps.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
