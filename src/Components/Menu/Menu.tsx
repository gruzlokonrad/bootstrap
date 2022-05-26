import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserLarge } from '@fortawesome/free-solid-svg-icons';

import './Menu.scss';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  ButtonGroup,
  Button,
} from 'react-bootstrap';


const Menu = () => {
  return (
    <nav className="Navbar navbar-expand-md position-sticky top-0">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">HARBINGER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Clothing" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Outfits</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Tops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bottoms</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link href="#lingerie">Lingerie</Nav.Link>
              <Nav.Link href="#shoes">Shoes</Nav.Link>
              <Nav.Link href="#accessories">Accessories</Nav.Link>
            </Nav>
            <Nav>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Card
                </Button>
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faUserLarge} />
                  Account
                </Button>
              </ButtonGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  )
}

export default Menu