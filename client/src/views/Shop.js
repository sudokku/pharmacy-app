import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    axios
      .get('http://localhost:5000/api/v1.0/shop')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return(
      <Container>
          <h1>Shop</h1>
          <br></br>
          <br></br>
          <div>
            <ul>
              {
                products.map(product => <li key={product._id}><Link to={product._id}>{product.name} {product.category} {product.price}</Link></li>)
              }
            </ul>
          </div>
      </Container>
  );
};

export default Shop;
