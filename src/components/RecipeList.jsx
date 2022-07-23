import { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Badge } from 'react-bootstrap';
import RecipeData from '../data/RecipeData';
import RecipeItem from './RecipeItem';
import Pagination from './Pagination';

function RecipeList() {
	const [recipes, setRecipes] = useState([]);
	const [recipesPerPage, setRecipesPerPage] = useState(6);
	const [totalRecipes, setTotalRecipes] = useState(100);
	const [active, setActive] = useState(1);

	const fetchRecipes = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_SPOONACULAR_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
		);

		const data = await response.json();

		console.log(data);

		setRecipes(data.recipes);
	};

	useEffect(() => {
		fetchRecipes();
	}, [active]);

	if (!recipes || recipes.length === 0) return <p>No Recipes Yet</p>;

	const paginate = (pageNumber) => {
		const startRecipeIndex = (pageNumber - 1) * recipesPerPage;
		const endRecipeIndex = pageNumber * recipesPerPage;
		setActive(pageNumber);
		setRecipes(recipes.slice(startRecipeIndex, endRecipeIndex));
	};

	return (
		<div className="recipe-list-container">
			<ListGroup as="ul" className="recipe-list">
				{recipes.map((recipe) => (
					<RecipeItem recipe={recipe} />
				))}
			</ListGroup>
			<Pagination
				recipesPerPage={recipesPerPage}
				totalRecipes={totalRecipes}
				paginate={paginate}
				active={active}
			/>
		</div>
	);
}

export default RecipeList;
