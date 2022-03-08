import { useParams } from 'react-router-dom';

function RecipeDetail() {
	const params = useParams();

	console.log(params.id);

	return <div>Recipe Detail Page</div>;
}

export default RecipeDetail;
