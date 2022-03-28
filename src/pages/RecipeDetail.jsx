import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeData from '../data/RecipeData';
import { Badge, Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Ingredients from '../components/Ingredients';

function RecipeDetail() {
	const params = useParams();
	const [recipe, setRecipe] = useState(
		RecipeData.recipes.find((recipe) => recipe.id === 660266)
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
	// };

	if (!recipe || recipe.length === 0) return <p>No Recipe Yet</p>;

	const stripHTMLFromString = (str) => {
		return str.replace(/<\/?[^>]+(>|$)/g, '').trim();
	};

	return (
		<div className="recipe-detail-container">
			<h4 className="recipe-detail-title">{recipe.title}</h4>
			<hr />
			<Container fluid>
				<Row>
					<Col xs={5}>
						<Image id="recipe-detail-img" src={recipe.image} thumbnail={true} />
					</Col>
					<Col xs={7}>
						<div className="recipe-info">
							{recipe.cookingMinutes && (
								<p className="recipe-detail-cook-time">
									<strong>Cook Time:</strong> {recipe.cookingMinutes}
								</p>
							)}
							{recipe.preparationMinutes && (
								<p className="recipe-detail-prep-time">
									<strong>Prep Time:</strong> {recipe.preparationMinutes}
								</p>
							)}
							{recipe.readyInMinutes && (
								<p className="recipe-detail-total-time">
									<strong>Total Time:</strong> {recipe.readyInMinutes}
								</p>
							)}
							{recipe.servings && (
								<p className="recipe-detail-servings">
									<strong>Servings:</strong> {recipe.servings}
								</p>
							)}
							<div className="recipe-detail-badges">
								{recipe.glutenFree && <Badge bg="primary">Gluten Free</Badge>}
								{recipe.dairyFree && <Badge bg="primary">Dairy Free</Badge>}
								{recipe.vegan && <Badge bg="primary">Vegan</Badge>}
								{recipe.veryHealthy && <Badge bg="primary">Healthy</Badge>}
								{recipe.veryPopular && <Badge bg="primary">Popular</Badge>}
								{recipe.cheap && <Badge bg="primary">Cheap</Badge>}
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={6}>
						<h5 className="ingredients-header">Ingredients</h5>
						<Ingredients
							className="test2"
							ingredients={recipe.extendedIngredients}
						/>
					</Col>
					<Col xs={6}>
						<p className="instructions">
							<strong>Directions:</strong>{' '}
							{stripHTMLFromString(recipe.instructions)}
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default RecipeDetail;
