import { Container, Navbar } from 'react-bootstrap';

function Header() {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="#">
					<h3 className="app-title">Recipes App</h3>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default Header;
