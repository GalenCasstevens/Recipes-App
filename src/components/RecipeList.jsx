import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import RecipeData from '../data/RecipeData';

function RecipeList() {
	const [recipes, setRecipes] = useState(RecipeData.recipes);

	if (!recipes || recipes.length === 0) return <p>No Recipes Yet</p>;

	// useEffect(() => {
	// 	fetchRecipes();
	// }, []);

	// const fetchRecipes = async () => {
	// 	const response = await fetch(
	// 		`${process.env.REACT_APP_SPOONACULAR_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
	// 	);

	// 	const data = await response.json();

	// 	setRecipes(data.recipes);
	// 	setLoading(false);
	// };

	return (
		<ListGroup as="ul" className="recipe-list">
			{recipes.map((recipe) => (
				<ListGroup.Item as="li">{recipe.title}</ListGroup.Item>
			))}
		</ListGroup>
	);
}

export default RecipeList;
