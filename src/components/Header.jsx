import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="">
					<Link to="/">
						<h3 className="app-title">Recipes App</h3>
					</Link>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default Header;
