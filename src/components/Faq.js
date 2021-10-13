import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import '../Styles/Faq.css';
import FloatingLabel from "react-bootstrap/FloatingLabel";

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
                <Form.Select size="sm">
                    <option>Easiest and cheapest way to Create Character Variations?</option>
                    <p>Are a NFT Creator who is struggling</p>
                </Form.Select>

            </Container>
        </>
    )
}

export default Faq;