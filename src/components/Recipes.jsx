import { useEffect } from 'react';

function Recipes() {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchRecipes();
	}, []);

	const fetchRecipes = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_SPOONACULAR_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
		);
	};

	return <div>recipe results</div>;
}

export default Recipes;
