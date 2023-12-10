import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";

import {Button, Form} from "react-bootstrap";


const LoaderMaintains = (props) => {
    const [data, setLoaderData] = useState(null);
    const [editedData, setEditedData] = useState({});
    const [savedMessage, setSavedMessage] = useState(false);
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://127.0.0.1:8000/car-maintenance/${id}/`, {
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
            await axios.put(`http://127.0.0.1:8000/car-maintenance/${id}/`, editedData, {
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
            <Form className="button-form" onSubmit={handleSubmit}>
                <Button type="submit">Сохранить изменения</Button>
            </Form>
            {savedMessage && <p>Данные сохранены</p>}


            {data && (
                <div className="table-container">
                    <Table className='table-item'>
                        <thead>

                        </thead>
                        <tbody>
                        <tr>
                            <td>Номер машины</td>
                            <td>{data.Number}</td>
                        </tr>
                        <tr>
                            <td>Вид ТО</td>
                            <td>{data.carTo}</td>
                        </tr>
                        <tr>
                            <td>Дата проведения ТО</td>
                            <td><input
                                type="text"
                                name="dataTo"
                                value={editedData.dataTo}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("dataTo")}/></td>


                        </tr>
                        <tr>
                            <td>Номер заказ наряда</td>
                            <td><input
                                type="text"
                                name="order_outfit"
                                value={editedData.order_outfit}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("order_outfit")}/>
                            </td>

                        </tr>
                        <tr>
                            <td>Наработка</td>
                            <td><input
                                type="text"
                                name="operatingTime"
                                value={editedData.operatingTime}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("operatingTime")}/>
                            </td>

                        </tr>
                        <tr>
                            <td>Дата заказ наряда</td>
                            <td><input
                                type="text"
                                name="data_order_outfit"
                                value={editedData.data_order_outfit}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("data_order_outfit")}/></td>

                        </tr>

                        </tbody>
                    </Table>

                </div>
            )}
        </div>

    );
};


export default LoaderMaintains
