import React, {useState} from 'react';
import axios from 'axios';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Infotext from "../../InfoText/Infotext.jsx";
import "./Forms.css"

const Forms = () => {
    const [formData, setFormData] = useState({
        modelCar: '',
        equipment: '',
        modelCarDe: '',
        numberFactory: '',
        modelsEngines: '',
        numberEngines: '',
        transmissions: '',
        numberTransmissions: '',
        modelsBridge: '',
        modelsBridgeDe: '',
        numberBridge: '',
        modelsBridgeSteerable: '',
        modelsBridgeSteerableDe: '',
        numberBridgeSteerable: '',
        contractSupply: '',
        dateShipping: '',
        consignee: '',
        addressDelivery: '',
        client: '',
        serviceCompanies: ''
    });

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post('http://127.0.0.1:8000/models/', formData, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Token ${token}`
                }
            });
            console.log(response);
            // Optionally, handle the response or perform any necessary actions
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <Infotext/>
            <div className="form-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="modelCar">
                        <Form.Label>Модель погрузчика</Form.Label>
                        <Form.Control type="text" name="modelCar" value={formData.modelCar}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="equipment">
                        <Form.Label>Комплектация</Form.Label>
                        <Form.Control type="text" name="equipment" value={formData.equipment}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="numberFactory">
                        <Form.Label>Заводлской Номер</Form.Label>
                        <Form.Control type="text" name="numberFactory" value={formData.numberFactory}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="modelCarDe">
                        <Form.Label>описание модели погрузчика</Form.Label>
                        <Form.Control type="text" name="modelCarDe" value={formData.modelCarDe}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="modelsEngines">
                        <Form.Label>Модель Двигателя</Form.Label>
                        <Form.Control type="text" name="modelsEngines" value={formData.modelsEngines}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="numberEngines">
                        <Form.Label>Номер Двигателя</Form.Label>
                        <Form.Control type="text" name="numberEngines" value={formData.numberEngines}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="modelsBridgeSteerable">
                        <Form.Label>Модель управляемого моста</Form.Label>
                        <Form.Control type="text" name="modelsBridgeSteerable" value={formData.modelsBridgeSteerable_id}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="numberBridgeSteerable">
                        <Form.Label>Номер управляемого моста</Form.Label>
                        <Form.Control type="text" name="numberBridgeSteerable" value={formData.modelsBridgeSteerable_id}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="transmissions">
                        <Form.Label>Трансмиссия</Form.Label>
                        <Form.Control type="text" name="transmissions" value={formData.transmissions}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="numberTransmissions">
                        <Form.Label>Номер Трансмиссии</Form.Label>
                        <Form.Control type="text" name="numberTransmissions" value={formData.numberTransmissions}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="modelsBridge">
                        <Form.Label>Модель Ведущего моста</Form.Label>
                        <Form.Control type="text" name="modelsBridge" value={formData.modelsBridge}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="numberBridge">
                        <Form.Label>Номер ведешего моста</Form.Label>
                        <Form.Control type="text" name="numberBridge" value={formData.numberBridge}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="modelsBridgeDe">
                        <Form.Label>Описание ведущего моста</Form.Label>
                        <Form.Control type="text" name="modelsBridgeDe" value={formData.modelsBridgeDe}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="modelsBridgeSteerable">
                        <Form.Label>Модель Управляемого моста</Form.Label>
                        <Form.Control type="text" name="modelsBridgeSteerable"
                                      value={formData.modelsBridgeSteerable}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="contractSupply">
                        <Form.Label>Описание Управляемого моста</Form.Label>
                        <Form.Control type="text" name="modelsBridgeSteerableDe"
                                      value={formData.modelsBridgeSteerableDe}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="contractSupply">
                        <Form.Label>Договор поставки №, дата</Form.Label>
                        <Form.Control type="text" name="contractSupply" value={formData.contractSupply}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="dateShipping">
                        <Form.Label>ОДата отгрузки с завода</Form.Label>
                        <Form.Control type="text" name="dateShipping" value={formData.dateShipping}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="consignee">
                        <Form.Label>Получатель</Form.Label>
                        <Form.Control type="text" name="consignee" value={formData.consignee}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="addressDelivery">
                        <Form.Label>Адрес поставки</Form.Label>
                        <Form.Control type="text" name="addressDelivery" value={formData.addressDelivery}
                                      onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="client">
                        <Form.Label>Клиент</Form.Label>
                        <Form.Control type="text" name="client" value={formData.client} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="serviceCompanies">
                        <Form.Label>Сервисная компания</Form.Label>
                        <Form.Control type="text" name="serviceCompanies" value={formData.serviceCompanies}
                                      onChange={handleInputChange}/>
                    </Form.Group>


                    {/* Add more Form.Group for other fields */}
                    <Button variant="primary" type="submit" className="submit-button">
                        Сохранить
                    </Button>
                </Form>


            </div>
        </>
    );
};

export default Forms;