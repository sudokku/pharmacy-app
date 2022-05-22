import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <br /><br />
      <Row className="d-flex justify-content-center">
        <Col xs lg={4}>
          <form>
            <h3>Login</h3>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="username"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
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
