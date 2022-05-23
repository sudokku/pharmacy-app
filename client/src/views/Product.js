import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const [product, setProduct] = useState({})
    let { id } = useParams()
    
    useEffect(() =>{
        axios
        .get(`http://localhost:5000/api/v1.0/product/${id}`)
        .then(res => {
            console.log(res)
            setProduct(res.data)
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
        {product.name}
        <br></br>
        {product.category}
        <br></br>
        {product.description}
        <br></br>
        {product.price}
        </div>
        </Container>
        );
    };
    
export default Product;
    