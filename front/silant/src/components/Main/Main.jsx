import React, {useState, useEffect} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Main =  () => {
    // const [response, setResponse] = useState(null);
    //  const [users, setUsers] = useState(null);
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

   const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Раскомментируйте следующую строку, если токен хранит информацию в формате JSON
    const { name } = JSON.parse(token);

    // Установить имя пользователя в состояние
    setUsername(name);
    console.log(name)
  }, []);

    useEffect(async () => {
        const userData = async () => {
            try {
                const user = await axios.get("http://127.0.0.1:8000/users/");
                setUsers(user.data);
                console.log(user);
            }  catch (error) {
                console.log(error);
            }
        };

        userData();
    }, []);







    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/models/");
                setResponse(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/main");
        } else {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <>

            <div className="container">
                <div className="table-container">

                        <td>{username}</td>
                    {response && (
                        <Table bordered responsive>
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
                                    <td>{model.numberFactory}</td>
                                    <td>{model.numberEngines}</td>
                                    <td>{model.date_created}</td>
                                    <td>{model.numberTransmissions}</td>
                                    <td>{model.numberBridge}</td>
                                    <td>{model.numberBridgeSteerable}</td>
                                    <td>{model.contractSupply}</td>
                                    <td>{model.dateShipping}</td>
                                    <td>{model.consignee}</td>
                                    <td>{model.addressDelivery}</td>
                                    <td>{model.equipment}</td>
                                    <td>{model.client}</td>
                                    <td>{model.name}</td>
                                    <td>{model.modelsEngines}</td>
                                    <td>{model.transmissions}</td>
                                    <td>{model.modelsBridge}</td>
                                    <td>{model.modelsBridgeSteerable}</td>
                                    <td>{model.serviceCompanies}</td>
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