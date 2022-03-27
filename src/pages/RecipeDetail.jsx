import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeData from '../data/RecipeData';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Ingredients from '../components/Ingredients';

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

	const stripHTMLFromString = (str) => {
		return str.replace(/<\/?[^>]+(>|$)/g, '').trim();
	};

	return (
		<div className="recipe-detail-container">
			<h4 className="recipe-detail-title">{recipe.title}</h4>
			<hr />
			<Container fluid>
				<Row>
					<Col xs={12}>
						<Image
							id="recipe-detail-image"
							src={recipe.image}
							thumbnail={true}
						/>
					</Col>
					<Col xs={8}></Col>
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
