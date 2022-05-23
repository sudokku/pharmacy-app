import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { ...formData };

    //console.log(user); 
    axios
      .post("http://localhost:5000/api/v1.0/users/login", { ...user })
      .then((res) => {
        console.log(res);
        navigate("/my-account")
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>
      <br />
      <br />
      <Row className="d-flex justify-content-center">
        <Col xs lg={4}>
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="username"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value})
                }
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right">
              Don't have an account? <Link to="/register">register</Link>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
