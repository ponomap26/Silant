import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import React from "react"

const CreateTO = (props) => {
    const {numberFactory} = props;

    const [response, setOptions] = useState(null);
    const [isEditing, setIsEditing] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const token = localStorage.getItem("token");

    const [toData, setTOData] = useState({
        Number: numberFactory,
        carTo: "",
        carToDe: "",
        dataTo: "",
        operatingTime: "",
        order_outfit: "",
        data_order_outfit: "",
    });
    const [toTO, setTOTO] = useState({
        maintenance: "",

    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTOData({...toData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/car-maintenance/", toData, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleModalSubmit = () => {
        // Perform any necessary validation or data manipulation before submitting
        handleAddTO();
        setShowModal(false); // Close the modal after submission
    };

    const handleAddTO = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/car-to/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            const data = response.data; // Предполагается, что данные приходят в виде массива объектов
            setOptions(data); // Сох
            console.log(response)

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container" style={{marginTop: "-200px"}}>
            <h2>Создание ТО</h2>
            <Form onSubmit={handleSubmit}>
                {/* Add input fields for TO data */}
                <Form.Group controlId="Number">
                    <Form.Label>Заводской номер</Form.Label>
                    <Form.Control
                        type="text"
                        name="Number"
                        value={toData.Number}
                        // readOnly // Make the input read-only
                    />
                </Form.Group>
                <Form.Group controlId="carTo">
                    <Form.Label>Вид ТО</Form.Label>
                    <Form.Control
                        as="select"
                        name="carTo"
                        value={toData.carTo}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                    >
                        <option value="">Выберите вид ТО</option>
                        {response && response.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.description}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button onClick={handleAddTO}>Загрузить виды ТО</Button>


                <Form.Group dataTo="dataTo">
                    <Form.Label>Дата проведения ТО</Form.Label>
                    <Form.Control
                        type="text"
                        name="dataTo"
                        value={toData.dataTo}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="operatingTime">
                    <Form.Label>Наработка</Form.Label>
                    <Form.Control
                        type="text"
                        name="operatingTime"
                        value={toData.operatingTime}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="order_outfit">
                    <Form.Label>Номер заказ наряда</Form.Label>
                    <Form.Control
                        type="text"
                        name="order_outfit"
                        value={toData.order_outfit}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="data_order_outfit">
                    <Form.Label>Дата заказ наряда</Form.Label>
                    <Form.Control
                        type="text"
                        name="data_order_outfit"
                        value={toData.data_order_outfit}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button type="submit">Создать ТО</Button>
            </Form>

        </div>
    );
};

export default CreateTO;