import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { ProductContext } from './ProductContext';
import { Link } from 'react-router-dom';

function HomeProducts(props) {
    return (
        <>
            <h1>Featured Products</h1>
            <Stack direction="horizontal" gap={3}>
                <ProductContext.Consumer>
                    {({ products }) => (
                        <>
                            {products && products.length >= 3 && (
                                <>
                                    <Card key={products[0].id} style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={products[0].imageUrl} alt={products[0].name} />
                                        <Card.Body>
                                            <Card.Title>{products[0].name}</Card.Title>
                                            <Card.Text>{products[0].description}</Card.Text>
                                            <Link to={`/products/${products[0].id}`} className="btn btn-primary">
                                                View Details
                                            </Link>
                                        </Card.Body>
                                    </Card>

                                    <Card key={products[1].id} style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={products[1].imageUrl} alt={products[1].name} />
                                        <Card.Body>
                                            <Card.Title>{products[1].name}</Card.Title>
                                            <Card.Text>{products[1].description}</Card.Text>
                                            <Link to={`/products/${products[1].id}`} className="btn btn-primary">
                                                View Details
                                            </Link>
                                        </Card.Body>
                                    </Card>

                                    <Card key={products[2].id} style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={products[2].imageUrl} alt={products[2].name} />
                                        <Card.Body>
                                            <Card.Title>{products[2].name}</Card.Title>
                                            <Card.Text>{products[2].description}</Card.Text>
                                            <Link to={`/products/${products[2].id}`} className="btn btn-primary">
                                                View Details
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </>
                            )}
                        </>
                    )}
                </ProductContext.Consumer>
            </Stack>
        </>
    );
}

export default HomeProducts;