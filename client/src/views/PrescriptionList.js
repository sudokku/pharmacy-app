import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const PrescriptionList = () => {
    const [prescriptions, setPrescriptions] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/v1.0/managers/prescriptionList')
            .then(res => {
                console.log(res)
                setPrescriptions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Container>
            <h1>List of Prescriptions</h1>
            <br></br>
            <br></br>
            <div>
                <ul>
                    {
                        prescriptions.map(prescription =>
                            <li key={prescription._id}>
                                <span>{prescription.presDescription}</span>
                            </li>)
                    }
                </ul>
            </div>
        </Container>
    );
};

export default PrescriptionList;