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

	return (
		<div className="recipe-detail-container">
			<h4 className="recipe-detail-title">{recipe.title}</h4>
			<hr />
			<Container fluid>
				<Row>
					<Col xs={4}>
						<Image
							id="recipe-detail-image"
							src={recipe.image}
							thumbnail={true}
						/>
					</Col>
					<Col xs={8}>
						<Ingredients />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default RecipeDetail;
