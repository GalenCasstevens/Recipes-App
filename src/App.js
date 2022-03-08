import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route exact path="/" element={<RecipeList />} />
					<Route path="/recipe/:id" element={<RecipeDetail />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
