import { useState } from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeData from '../data/RecipeData';
import Pagination from './Pagination';

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
		<div className="recipe-list-page">
			<ListGroup as="ul" className="recipe-list">
				{recipes.map((recipe) => (
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
											{recipe.extendedIngredients.map((ingredient, index) => {
												if (recipe.extendedIngredients.length - 1 !== index)
													return <span>{ingredient.name}, </span>;
												else return <span>{ingredient.name}</span>;
											})}
										</p>
									</div>
								</Col>
							</Row>
						</Container>
					</ListGroup.Item>
				))}
			</ListGroup>
			<Pagination postsPerPage={10} totalPosts={100} />
		</div>
	);
}

export default RecipeList;
