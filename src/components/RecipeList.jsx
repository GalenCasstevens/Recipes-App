import { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeData from '../data/RecipeData';
import Pagination from './Pagination';

function RecipeList() {
	const MAX_INGREDIENTS_DISP = 5;
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
				{currentRecipes.map((recipe, index) => (
					<ListGroup.Item as="li">
						<Container fluid>
							<Row>
								<Col xs={2}>
									<img src={recipe.image} alt="" />
								</Col>
								<Col xs={10}>
									<div className="recipe-info">
										<h5 className="recipe-title">
											<Link to={`/recipe/${recipe.id}`}>
												<strong>{recipe.title}</strong>
											</Link>
										</h5>
										<p className="ingredients">
											Ingredients:&nbsp;
											{recipe.extendedIngredients.map((ingredient, ind) => {
												var maxInd = recipe.extendedIngredients.length - 1;
												if (ind === maxInd && maxInd >= MAX_INGREDIENTS_DISP)
													return <span>{ingredient.name}...</span>;
												else if (
													ind !== maxInd &&
													ind < MAX_INGREDIENTS_DISP - 1
												)
													return <span>{ingredient.name}, </span>;
												else if (maxInd < MAX_INGREDIENTS_DISP)
													return <span>{ingredient.name}</span>;
											})}
										</p>
									</div>
								</Col>
							</Row>
						</Container>
					</ListGroup.Item>
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
