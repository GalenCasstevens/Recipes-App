import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeData from '../data/RecipeData';

function RecipeDetail() {
	const params = useParams();
	const [recipe, setRecipe] = useState(
		RecipeData.recipes.find((recipe) => recipe.id === 643129)
	);

	// useEffect(() => {
	// 	fetchRecipes();
	// }, []);

	// const fetchRecipes = async () => {
	// 	const response = await fetch(
	// 		`${process.env.REACT_APP_SPOONACULAR_URL}/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
	// 	);

	// 	const data = await response.json();

	// 	setRecipe(data);
	// 	// setLoading(false);
	// };

	if (!recipe || recipe.length === 0) return <p>No Recipe Yet</p>;

	return (
		<div className="recipe-detail-container">
			<h4 className="recipe-detail-title">{recipe.title}</h4>
			<hr />
		</div>
	);
}

export default RecipeDetail;
