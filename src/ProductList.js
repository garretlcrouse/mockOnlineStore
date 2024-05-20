import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Link, Outlet } from 'react-router-dom';
import { ProductContext } from './ProductContext';

function ProductList(props) {
  const [priceRange, setPriceRange] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  function productList(products) {
    if (products === null) return null;

    return products.map((product) => (
      <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
        </Card.Body>
      </Card>
    ));
  }

  
  function handlePriceRangeChange(event) {
    const selectedRange = event.target.value;
    setPriceRange(selectedRange);

    
    if (selectedRange === '0to10') {
      setFilteredProducts(products.filter((product) => product.price >= 0 && product.price <= 10));
    } else if (selectedRange === '10to20') {
      setFilteredProducts(products.filter((product) => product.price > 10 && product.price <= 20));
    } else if (selectedRange === '20ormore') {
      setFilteredProducts(products.filter((product) => product.price > 20));
    } else {
      
      setFilteredProducts(products);
    }
  }

  return (
    <>
      <h1>Products</h1>
      <div>
        <label>
          Filter by Price:
          <select value={priceRange} onChange={handlePriceRangeChange}>
            <option value="">All</option>
            <option value="0to10">$0 to $10</option>
            <option value="10to20">$10 to $20</option>
            <option value="20ormore">$20 or more</option>
          </select>
        </label>
      </div>
      <Stack direction="horizontal" gap={3}>
        <ProductContext.Consumer>
          {({ products }) => (
            <div className="d-flex flex-wrap justify-content-center">
              {productList(filteredProducts)}
            </div>
          )}
        </ProductContext.Consumer>
        <Outlet />
      </Stack>
    </>
  );
}

export default ProductList;
