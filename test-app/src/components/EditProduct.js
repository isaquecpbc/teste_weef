import { useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ListProduct() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        api.get(`products/${id}`).then(function(response) {
            console.log(response.data.message);
            setInputs(response.data.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        api.put(`products/${id}`, inputs).then(function(response){
            console.log(response.data.message);
            navigate('/');
        });
        
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <h1 className="text-center">Edit product</h1>
                </Col>
            </Row>
            <Form id="productForm" onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3" controlId="productForm.name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={inputs.name} type="text" name="name" placeholder="product name" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="productForm.description">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={3}  value={inputs.description} name="description" onChange={handleChange}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="productForm.price">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control value={inputs.price} type="text" name="price" placeholder="price" onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="row row-cols-auto justify-content-end">
                    <Col>
                        <Button variant="outline-success" type="submit">Save</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
