import { useEffect, useState } from 'react';

function Recipes() {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchRecipes();
	}, []);

	const fetchRecipes = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_SPOONACULAR_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
		);

		const data = await response.json();

		setRecipes(data.recipes);
		console.log(recipes);
		setLoading(false);
	};

	return (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"></div>
	);
}

export default Recipes;
