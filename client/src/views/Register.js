import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    roles: ['user']
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { ...formData };
    
    console.log(user);
    axios
      .post("http://localhost:5000/api/v1.0/users/register", { ...user })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.warn(err))
  };

  return (
    <Container>
      <br />
      <br />
      <Row className="d-flex justify-content-center">
        <Col xs lg={4}>
          <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <div className="mb-3">
              <label>Full name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
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
                placeholder="Enter password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <div className="mb-3">
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => 
                  setFormData({ ...formData, roles: e.target.checked?['user', 'request-manager']:['user'] })
                }
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Request Manager role
              </label>
            </div>
            <p className="forgot-password text-right">
              Already registered <Link to="/login">sign in</Link>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
