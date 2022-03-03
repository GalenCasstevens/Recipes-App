import Header from './components/Header';
import RecipeList from './components/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<RecipeList />
			</div>
		</>
	);
}

export default App;
