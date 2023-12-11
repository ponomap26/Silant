import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./LoaderComplainsts.css"
import {Button, Form} from "react-bootstrap";


const LoaderComplaints = (props) => {
    const [data, setLoaderData] = useState(null);
    const [editedData, setEditedData] = useState({});
    const [savedMessage, setSavedMessage] = useState(false);
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://127.0.0.1:8000/complaints/${id}/`, {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                });

                setLoaderData(response.data);
                setEditedData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditedData({...editedData, [name]: value});
    };
    const handleFieldClick = (fieldName) => {
        setSavedMessage(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://127.0.0.1:8000/complaints/${id}/`, editedData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            });
            setSavedMessage(true);


        } catch (error) {
            console.log(error)
        }
    };


    return (

        <div className="container" style={{marginTop: "0px"}}>
            <Link className="button-link" to="/main">
                <Button>Назад</Button>
            </Link>
            <Form   onSubmit={handleSubmit}>
                <Button className="button-form" type="submit">Сохранить изменения</Button>
            </Form>
            {savedMessage && <p>Данные сохранены</p>}


            {data && (
                <div className="table-container">
                    <Table className='table-item'>
                        <thead>

                        </thead>
                        <tbody>
                        <tr>
                            <td>Зав № машины</td>
                            <td>{data.carNumber}</td>
                        </tr>
                        <tr>
                            <td>Дата отказа</td>
                            <td><input
                                type="text"
                                name="dataRecovery"
                                value={editedData.dataRecovery}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("dataRecovery")}/></td>

                        </tr>
                        <tr>
                            <td>Наработка, м/час</td>
                            <td><input
                                type="text"
                                name="operatingTime"
                                value={editedData.operatingTime}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("operatingTime")}/>
                            </td>


                        </tr>
                        <tr>
                            <td>Узел отказа</td>
                            <td>{data.nodeFailure}</td>


                        </tr>
                        <tr>
                            <td>Узел отказа</td>
                            <td>{data.nodeFailureDE}</td>


                        </tr>
                        <tr>
                            <td>Описание отказа</td>
                            <td><input
                                type="text"
                                name="descriptionFailure"
                                value={editedData.descriptionFailure}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("descriptionFailure")}/>
                            </td>

                        </tr>
                        <tr>
                            <td>Способ восстановления</td>
                            <td>{data.metodRecovery}</td>


                        </tr>
                        <tr>
                            <td>Используемые запасные части</td>
                            <td><input
                                type="text"
                                name="partSpare"
                                value={editedData.partSpare}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("partSpare")}/></td>

                        </tr>
                        <tr>
                            <td>Время простоя</td>
                            <td><input
                                type="text"
                                name="downtime"
                                value={editedData.downtime}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("downtime")}/></td>

                        </tr>
                        <tr>
                            <td>'Сервисная компания</td>
                            <td>{data.componyServisor}</td>


                        </tr>

                        </tbody>
                    </Table>

                </div>
            )}
        </div>

    );
};


export default LoaderComplaints
