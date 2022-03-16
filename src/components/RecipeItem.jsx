import { Link } from 'react-router-dom';
import { Badge, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function RecipeItem({ recipe }) {
	const MAX_INGREDIENTS_DISP = 5;

	return (
		<ListGroup.Item as="li">
			<Container fluid>
				<Row>
					<Col xs={2}>
						<img src={recipe.image} alt="" />
					</Col>
					<Col xs={8}>
						<div className="recipe-info">
							<div className="float-left">
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
										else if (ind !== maxInd && ind < MAX_INGREDIENTS_DISP - 1)
											return <span>{ingredient.name}, </span>;
										else if (maxInd < MAX_INGREDIENTS_DISP)
											return <span>{ingredient.name}</span>;
									})}
								</p>
								{recipe.glutenFree && <Badge bg="primary">Gluten Free</Badge>}
								{recipe.dairyFree && <Badge bg="primary">Dairy Free</Badge>}
								{recipe.vegan && <Badge bg="primary">Vegan</Badge>}
								{recipe.veryHealthy && <Badge bg="primary">Healthy</Badge>}
								{recipe.veryPopular && <Badge bg="primary">Popular</Badge>}
								{recipe.cheap && <Badge bg="primary">Cheap</Badge>}
							</div>
						</div>
					</Col>
					<Col xs={2}>
						<div className="prep-time">
							<FontAwesomeIcon icon={faClock} />
							<span className="prep-minutes">
								<strong>{recipe.readyInMinutes}m</strong>
							</span>
						</div>
					</Col>
				</Row>
			</Container>
		</ListGroup.Item>
	);
}

export default RecipeItem;
