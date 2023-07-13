import { useEffect, useState } from "react";
import api from "../services/api";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function ListProduct() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        api.get('products/').then(function(response) {
            console.log(response.data.message);
            setProducts(response.data.data);
        });
    }

    const deleteProduct = (id) => {
        api.delete(`products/${id}`).then(function(response){
            console.log(response.data.message);
            getProducts();
        });
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <h1 className="text-center">List Products</h1>
                </Col>
            </Row>
            {products.map((product, key) =>
            <Row key={key}>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">R$ {product.price}</Card.Subtitle>
                        <Card.Text>
                        {product.description}
                        </Card.Text>
                        <Row className="row row-cols-auto justify-content-end">
                            <Col>
                                <Card.Link href={`product/${product.id}/edit`}>Edit</Card.Link>
                            </Col>
                            <Col>
                                <Card.Link 
                                    className="btn btn-danger"
                                    onClick={() => deleteProduct(product.id)}
                                    >Delete</Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            )}
        </Container>
    )
}
