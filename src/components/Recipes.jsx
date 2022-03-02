import { useEffect, useState } from 'react';
import RecipeData from '../data/RecipeData';

function Recipes() {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchRecipes();
		// setRecipes(RecipeData.recipes);
	}, []);

	const fetchRecipes = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_SPOONACULAR_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
		);

		const data = await response.json();

		setRecipes(data.recipes);
		setLoading(false);
	};

	if (recipes && recipes !== null) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{recipes.map((recipe) => (
					<h3>{recipe.title}</h3>
				))}
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			<h1>No Data</h1>
		</div>
	);
}

export default Recipes;
