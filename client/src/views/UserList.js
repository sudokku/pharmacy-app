import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/v1.0/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Container>
            <h1>List of Users</h1>
            <br></br>
            <br></br>
            <div>
                <ul>
                    {
                        users.map(user =>
                            <li key={user._id}>
                                <h5>{user.name}</h5>
                                <span>{user.username} {user.roles}</span>
                                <br></br>
                                <span>{user.roles.includes('request-manager')?<button>Make manager</button>:null}</span>
                            </li>)
                    }
                </ul>
            </div>
        </Container>
    );
};

export default UserList;