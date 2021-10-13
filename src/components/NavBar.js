import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../Assets/Logo.PNG';
import Button from 'react-bootstrap/Button';
import '../Styles/NavBar.css';


function NavBar() {
    return (
        <>
            <Navbar scrolling dark expand="md" fixed="top" className="header">
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
                    <button className="navButton">Start your free trial</button>
                </Container>
                
            </Navbar>
        </>
    )
}

export default NavBar;