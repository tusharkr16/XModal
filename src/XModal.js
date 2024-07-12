import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap';

const XModal = () => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');

    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show]);

    const FormModal = () => (
        <>
            <div className='modal-wrapper'></div>
            <div className='modal-container' ref={modalRef}>
                <Form>
                    <h2>Fill Details</h2>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <br />
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <br />
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Phone number</Form.Label>
                        <br />
                        <Form.Control
                            type="text"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="dob">
                        <Form.Label>Date of Birth</Form.Label>
                        <br />
                        <Form.Control
                            type="date"
                            placeholder="Enter date of birth"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-button">
                        Submit
                    </Button>
                </Form>
                <button onClick={() => setShow(false)}>Close modal</button>
            </div>
        </>
    );

    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <button onClick={() => setShow(true)}>Open Form</button>
                    {show && <FormModal />}
                </div>
            </div>
        </div>
    );
}

export default XModal;
