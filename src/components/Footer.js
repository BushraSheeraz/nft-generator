import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import Logo from '../Assets/Logo.PNG';
import "../Styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerLogo">
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="114px"
                            height="68px"
                            className="d-inline-block align-top"
                            alt="nft-Generator"
                        />
                    </Navbar.Brand>
                </div>
                {/* <div className="tableDiv">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Pricing</li>
                    </ul>

                </div> */}
                <Table className="tableDiv" style={{color:'rgba(86,43,149,1)'}}>
                    <thead>
                        <tr>
                            <th>Home</th>
                        
                            <th>About</th>

                       
                            <th>Pricing</th>

                        </tr>
                    </thead>
                </Table>
                <div className="socialMedia">
                    <h4>Contact Us</h4>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '20px' }} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;