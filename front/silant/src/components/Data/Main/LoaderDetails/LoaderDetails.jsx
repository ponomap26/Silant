import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import './LoaderDetails.css'
import {Button, Form} from "react-bootstrap";
import CreateTO from "../../Maintenance/CreateTO/CreateTO";

const LoaderDetails = (props) => {
    const [data, setLoaderData] = useState(null);
    const [editedData, setEditedData] = useState({});
    const [savedMessage, setSavedMessage] = useState(false);
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios(`http://127.0.0.1:8000/modelcar/${id}/`, {
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
            await axios.put(`http://127.0.0.1:8000/modelcar/${id}/`, editedData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            });
            setSavedMessage(true);
            console.log(data.numberFactory)

        } catch (error) {
            console.log(error)
        }
    };

    return (

        <div className="container" style={{marginTop: "0px"}}>
            <Link className="button-link" to="/main">
                <Button>Назад</Button>
            </Link>
            <Form className='button-form' onSubmit={handleSubmit}>
                <Button type="submit">Сохранить изменения</Button>
            </Form>
            {savedMessage && <p>Данные сохранены</p>}
            <Link  to={`/create-to/`}> {/* Передача numberFactory в URL */}
                <Button>Создать ТО</Button>
            </Link>


            {data && (
                <div className="table-container">
                    <Table variant='' striped bordered hover className='table-item'>
                        <thead>

                        </thead>
                        <tbody>
                        <tr>
                            <td>Модель техники</td>
                            <td>{data.modelCar}</td>
                        </tr>
                        <tr>
                            <td>Описание модели</td>
                            <td>{data.modelCarDe}</td>
                        </tr>
                        <tr>
                            <td>Зав № машины</td>
                            <td>{data.numberFactory}</td>


                        </tr>
                        <tr>
                            <td>Модель двигателя</td>
                            <td>{data.modelsEngines}</td>
                        </tr>
                        <tr>
                            <td>Заводской № двигателя</td>
                            <td><input
                                type="text"
                                name="numberEngines"
                                value={editedData.numberEngines}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("numberEngines")}/>
                            </td>

                        </tr>
                        <tr>
                            <td>Модель трансмиссии</td>
                            <td>{data.transmissions}</td>
                        </tr>
                        <tr>
                            <td>Заводской № трансмиссии</td>
                            <td><input
                                type="text"
                                name="numberTransmissions"
                                value={editedData.numberTransmissions}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("numberTransmissions")}/>
                            </td>

                        </tr>
                        <tr>
                            <td>Модель ведущего моста</td>
                            <td>{data.modelsBridge}</td>
                        </tr>
                        <tr>
                            <td>Описание ведущего моста</td>
                            <td>{data.modelsBridgeDe}</td>
                        </tr>
                        <tr>
                            <td>Заводской № ведущего моста</td>
                            <td><input
                                type="text"
                                name="numberBridge"
                                value={editedData.numberBridge}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("numberBridge")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Модель управляемого моста</td>
                            <td>{data.modelsBridgeSteerable}</td>
                        </tr>
                        <tr>
                            <td>Описание управляемого моста</td>
                            <td>{data.modelsBridgeSteerableDe}</td>
                        </tr>

                        <tr>
                            <td>Номер управляемого моста</td>
                            <td><input
                                type="text"
                                name="numberBridgeSteerable"
                                value={editedData.numberBridgeSteerable}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("numberBridgeSteerable")}/>
                            </td>

                        </tr>

                        <tr>
                            <td>Получатель</td>
                            <td>

                                <input
                                    type="text"
                                    name="consignee"
                                    value={editedData.consignee}
                                    onChange={handleInputChange}
                                    onClick={() => handleFieldClick("consignee")} // Handle field click
                                />

                            </td>

                        </tr>
                        <tr>
                            <td>Покупатель</td>
                            <td>{data.client}</td>

                        </tr>
                        <tr>
                            <td>Договор поставки №, дата</td>
                            <td><input
                                type="text"
                                name="contractSupply"
                                value={editedData.contractSupply}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("contractSupply")}/>
                            </td>

                        </tr>


                        <tr>
                            <td>Адрес поставки</td>
                            <td><input
                                type="text"
                                name="addressDelivery"
                                value={editedData.addressDelivery}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("addressDelivery")}/>
                            </td>

                        </tr>
                        <tr>
                            <td>Комплектация</td>
                            <td><input
                                type="text"
                                name="equipment"
                                value={editedData.equipment}
                                onChange={handleInputChange}
                                onClick={() => handleFieldClick("equipment")}/>
                            </td>

                        </tr>

                        {/*<tr>*/}
                        {/*    <td>Consignee</td>*/}
                        {/*    <td>*/}

                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            name="consignee"*/}
                        {/*            value={editedData.consignee}*/}
                        {/*            onChange={handleInputChange}*/}
                        {/*            onClick={() => handleFieldClick("consignee")} // Handle field click*/}
                        {/*        />*/}

                        {/*    </td>*/}

                        {/*</tr>*/}

                        <tr>
                            <td>Сервисная компания</td>
                            <td>{data.serviceCompanies}</td>
                        </tr>
                        </tbody>
                    </Table>

                </div>
            )}
        </div>

    );
};

export default LoaderDetails;