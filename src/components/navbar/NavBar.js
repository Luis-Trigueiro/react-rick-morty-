import { Navbar,Nav,Container} from "react-bootstrap"

import logo from './img/logo.png';

const NavBar=()=>{

    return(
        <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="95px"
                    className="d-inline-block align-top"
                    alt="Rick and Morty logo"
                />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}
export default NavBar