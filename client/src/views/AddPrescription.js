import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const AddPrescription = () => {
    const [prescriptionData, setPrescriptionData] = useState({
        Presc: ""
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const prescription = { ...prescriptionData };
      
      console.log(prescription);
      axios
        .post("http://localhost:5000/api/v1.0/users/new-prescription", { ...prescription })
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
              <h3>Add your prescription</h3>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your prescription here"
                  onChange={(e) =>
                    setPrescriptionData({ ...prescriptionData, Presc: e.target.value })
                  }
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Send your prescription
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default AddPrescription;