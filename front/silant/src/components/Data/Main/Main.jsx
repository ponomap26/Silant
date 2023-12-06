import {Button, Form, Table} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Infotext from "../InfoText/Infotext.jsx";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const Main = () => {
    const [response, setResponse] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://127.0.0.1:8000/models/", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    }
                });
                setResponse(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/main');
        } else {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleEdit = (id) => {
        setEditingId(id);
    };

    const handleSave = async (id, updatedModel) => {
        try {
            const token = localStorage.getItem("token");
            const updatedResponse = await axios.patch(`http://127.0.0.1:8000/models/${id}/`, updatedModel, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            });
            setResponse(prevResponse => {
                const updatedData = prevResponse.map(model => {
                    if (model.id === id) {
                        return updatedResponse.data;
                    }
                    return model;
                });
                return updatedData;
            });
            setEditingId(null);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (id, field, value) => {
        const updatedData = response.map(model => {
            if (model.id === id) {
                return {...model, [field]: value};
            }
            return model;
        });
        setResponse(updatedData);
    };

    return (
        <>
            <Infotext/>
            <div className="container" style={{marginTop: "-600px"}}>
                <div className="table-container">
                    {response.length > 0 && (
                        <Table className="table-data" bordered responsive>
                            <thead>
                            <tr>
                                <th>Number of Factory</th>
                                <th>Number of Engines</th>
                                <th>Date Created</th>
                                <th>Number of Transmissions</th>
                                <th>Number of Bridge</th>
                                <th>Number of Steerable Bridge</th>
                                <th>Contract Supply</th>
                                <th>Date Shipping</th>
                                <th>Consignee</th>
                                <th>Address Delivery</th>
                                <th>Equipment</th>
                                <th>Client</th>
                                <th>Name</th>
                                <th>Model of Engines</th>
                                <th>Transmission</th>
                                <th>Model of Bridge</th>
                                <th>Model of Steerable Bridge</th>
                                <th>Service Companies</th>
                            </tr>
                            </thead>
                            <tbody>
                            {response.map((model) => (
                                <tr key={model.id}>
                                    <td>
                                        {editingId === model.id ? (
                                            <Form.Control
                                                type="text"
                                                value={model.numberFactory}
                                                onChange={(e) => handleInputChange(model.id, 'numberFactory', e.target.value)}
                                            />
                                        ) : (
                                            model.numberFactory
                                        )}
                                    </td>
                                    <td>
                                        {editingId === model.id ? (
                                            <Form.Control
                                                type="text"
                                                value={model.numberEngines}
                                                onChange={(e) => handleInputChange(model.id, 'numberEngines', e.target.value)}
                                            />
                                        ) : (
                                            model.numberEngines
                                        )}
                                    </td>
                                    <td>
                                        {editingId === model.id ? (
                                            <Form.Control
                                                type="text"
                                                value={model.dateCreated}
                                                onChange={(e) => handleInputChange(model.id, 'dateCreated', e.target.value)}
                                            />
                                        ) : (
                                            model.dateCreated
                                        )}
                                    </td>
                                    <td>
                                        {editingId === model.id ? (
                                            <Form.Control
                                                type="text"
                                                value={model.dateShipping}
                                                onChange={(e) => handleInputChange(model.id, 'dateShipping', e.target.value)}
                                            />
                                        ) : (
                                            model.dateShipping
                                        )}
                                    </td>
                                    {/* Add other table cells */}
                                    <td>
                                        <td>
                                        {editingId === model.id ? (
                                            <Form.Control
                                                type="text"
                                                value={model.equipment}
                                                onChange={(e) => handleInputChange(model.id, 'equipment', e.target.value)}
                                            />
                                        ) : (
                                            model.equipment
                                        )}
                                    </td>
                                        {editingId === model.id ? (
                                            <Button
                                                variant="success"
                                                onClick={() => handleSave(model.id, model)}
                                            >
                                                Save
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="primary"
                                                onClick={() => handleEdit(model.id)}
                                            >
                                                Edit
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>
        </>
    );
};

export default Main;