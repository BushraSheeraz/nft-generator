import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Styles/Payment.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function Payment() {
    return (
        <>
            <Container className="payment">
                <Card className="paymentCard" style={{background: 'linear-gradient(90deg, rgba(86,43,149,1) 0%, rgba(73,62,216,1) 100%)'}}>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="paymentCard">
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="paymentCard">
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                    {/* <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup> */}
                </Card>
            </Container>
        </>
    )
}

export default Payment;