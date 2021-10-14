import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Styles/Payment.css';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function Payment() {
    return (
        <>
            <Container className="payment">

                <Card className="paymentCard" style={{ background: 'linear-gradient(90deg, rgba(86,43,149,1) 0%, rgba(73,62,216,1) 100%)' }}>

                    <Card.Body>
                        <Table className="paymentCard-table" style={{ color: 'white' }}>
                            <tr className="cardHeading">
                                <td>
                                    <h2>Pro Plan</h2>
                                </td>
                                <td>
                                    <h3>700$</h3>
                                </td>
                            </tr>
                            <tbody>
                                <tr>Plan includes</tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <button className="Lite"> Choose Lite Plan</button>
                    </Card.Body>
                </Card>
                <Card className="paymentCard" style={{ background: '#EBEAFA', color: 'rgba(86,43,149,1)' }}>
                    <Card.Body>
                        <Table className="paymentCard-table" style={{ color: 'rgba(86,43,149,1)' }}>
                            <tr className="cardHeading">
                                <td>
                                    <h2>Lite</h2>
                                </td>
                                <td><h3>Free</h3></td>
                            </tr>
                            <tbody>
                                <tr>Plan includes</tr>
                                <tr className="list">
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <button className="trial"> Choose Lite Plan</button>
                    </Card.Body>
                </Card>
                <Card className="paymentCard" style={{ background: 'rgba(86,43,149,1)', color: 'white' }}>
                    <Card.Body>
                        <Table className="paymentCard-table" style={{ color: 'white' }}>
                            <tr className="cardHeading">
                                <td>
                                    <h2>Pro Plan</h2>
                                </td>
                                <td><h3>300$</h3></td>
                            </tr>
                            <tbody>
                                <tr>Plan includes</tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
                                        500 artworks
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <button className="Lite"> Choose Lite Plan</button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Payment;