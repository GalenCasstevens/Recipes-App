import { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Badge } from 'react-bootstrap';
import RecipeData from '../data/RecipeData';
import RecipeItem from './RecipeItem';
import Pagination from './Pagination';

function RecipeList() {
	const [recipes, setRecipes] = useState(RecipeData.recipes);
	const [recipesPerPage, setRecipesPerPage] = useState(6);
	const [currentRecipes, setCurrentRecipes] = useState(
		RecipeData.recipes.slice(0, recipesPerPage)
	);
	const [totalRecipes, setTotalRecipes] = useState(RecipeData.recipes.length);
	const [active, setActive] = useState(1);

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

	const paginate = (pageNumber) => {
		const startRecipeIndex = (pageNumber - 1) * recipesPerPage;
		const endRecipeIndex = pageNumber * recipesPerPage;
		setActive(pageNumber);
		setCurrentRecipes(recipes.slice(startRecipeIndex, endRecipeIndex));
	};

	return (
		<div className="recipe-list-container">
			<ListGroup as="ul" className="recipe-list">
				{currentRecipes.map((recipe) => (
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
