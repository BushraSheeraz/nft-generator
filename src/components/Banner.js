import Container from 'react-bootstrap/Container';
import '../Styles/Banner.css';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, FormControl } from 'react-bootstrap';


function Banner() {
    const [price, setPrice] = useState('');
    var handleChange = (e) => {
        setPrice(e.target.value * 1711.50);
    }
    return (
        <>
            <div className="banner">
                <div className="bannerHeadings">
                    <h1>Transparent pricing, no hidden charges</h1>
                    <p style={{ justifyContent: 'center' }}>We offer two affordable plans,we offer two adorable plans,
                        We offer two adorable plans</p>
                </div>
            </div>
            <Container className="pay">
                <div className="paySection">
                    <h3 style={{ fontSize: '30px' }}>Pay for</h3>
                    <h2>What you need</h2>
                    <p>Pay for what you need,no hidden fee
                        Pay for what you need,no hidden fee for
                        what you need, no hidden fee need,
                        no hidden fee</p>
                </div>
                <div className="pricing">
                    <h2>How many artworks you need?</h2>
                    <Form.Label>Number of artworks</Form.Label>
                    <InputGroup className="mb-3">
                        <input style={{
                            background: 'transparent',
                            border: '2px solid white',
                            borderRadius: '5px',
                            padding: '10px 5px',
                            color: 'white',
                            fontSize: '20px'
                        }} value={price} onChange={(e) => handleChange(e)} />
                    </InputGroup>
                    <Form.Label>Price</Form.Label>
                    <InputGroup className="mb-3"  >
                        <input  value={price} style={{
                            background: 'transparent',
                            border: 'none',
                            padding: '10px 5px',
                            color: 'white',
                            fontSize: '20px'
                        }} />
                    </InputGroup>

                </div>
            </Container>
        </>
    )
}

export default Banner;