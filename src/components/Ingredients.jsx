import { ListGroup } from 'react-bootstrap';

function Ingredients({ ingredients }) {
	return (
		<ListGroup className="ingredients-list" as="ul">
			{ingredients.map((ingredient) => (
				<ListGroup.Item>
					{ingredient.amount} {ingredient.unit} {ingredient.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
}

export default Ingredients;
