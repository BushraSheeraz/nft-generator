import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../Assets/Logo.PNG';
import Button from 'react-bootstrap/Button';
import '../Styles/NavBar.css';


function NavBar() {
    return (
        <>
            {/* <Navbar collapseOnSelect expand="lg" fixed="top" className="header">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="114px"
                            height="68px"
                            className="d-inline-block align-top"
                            alt="nft-Generator"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto" style={{display:'flex',}}>
                            <button className="navButton">Start your free trial</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="114px"
                            height="68px"
                            className="d-inline-block align-top"
                            alt="nft-Generator"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'end'}}>
                        {/* <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav> */}
                        <Nav>
                            <Nav.Link href="#deets">
                                <button className="navButton">Start your free trial</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;