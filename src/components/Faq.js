import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import '../Styles/Faq.css';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <>
            <Container className="faq">
                <div className="heading">
                    <h3>Frequently asked questions</h3>
                </div>
                <Form.Select size="lg">
                    <option>FAQ 1</option>
                </Form.Select>
                <br />
                <Form.Select size="lg">
                    <option>FAQ 2</option>
                </Form.Select>
                <br />
                <Form.Select size="lg">
                    <option>FAQ 2</option>
                </Form.Select>
                <br />

                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >Easiest and cheapest way to Create Character Variations?</Accordion.Header>
                        <Accordion.Body>
                            Are a NFT Creator who is struggling
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* <Form.Select size="sm">
                <option>Easiest and cheapest way to Create Character Variations?</option>
                <p>Are a NFT Creator who is struggling</p>
                </Form.Select> */}

            </Container>
        </>
    )
}

export default Faq;