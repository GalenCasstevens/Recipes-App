import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Recipes />
				<img src={logo} className="App-logo" alt="logo" />
				<p>{process.env.REACT_APP_SPOONACULAR_URL}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
