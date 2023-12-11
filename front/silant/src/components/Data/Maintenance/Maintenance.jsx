import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Infotext from '../InfoText/Infotext.jsx';
import axios from 'axios';
import {Table, Modal, Button} from 'react-bootstrap';
import './Maintenance.css'
const Maintenance = () => {
    const [response, setResponse] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/maintenance');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchDataTO = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/car-maintenance/', {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Token ${token}`,
                    },
                });
                setResponse(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDataTO();
    }, []);

    const handleModalOpen = (data) => {
        console.log(data); // Проверьте значение `data`, чтобы убедиться, что оно содержит ожидаемые свойства
        setModalData(data.carToDe);
        setShowModal(true);
    };
    const handleModelCarEdit = (id) => {
        navigate(`/loader-maintens/${id}`);
    };
    return (
        <div>
            <Infotext/>
            <div className="container-maints"style={{marginTop: "-350px"}} >

                <div className="table-container">
                    {response && (
                        <Table responsive>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Номер машины</th>
                                <th>Вид ТО</th>
                                <th>Дата проведения ТО</th>
                                <th>Номер заказ наряда</th>
                                <th>Наработка</th>
                                <th>Дата заказ наряда</th>
                            </tr>
                            </thead>
                            <tbody>
                            {response.map((model) => (
                                <tr key={model.id}>
                                    <td>
                                        <Button onClick={() => handleModelCarEdit(model.id)}>Подробнее</Button>
                                    </td>
                                    <td>{model.Number}</td>
                                    <td>
                                        <a
                                            href="#"
                                            onClick={() => handleModalOpen(model)}
                                            style={{color: 'blue', textDecoration: 'underline'}} // Пример стиля ссылки
                                        >
                                            {model.carTo}
                                        </a>
                                    </td>
                                    <td>{model.dataTo}</td>
                                    <td>{model.data_order_outfit}</td>
                                    <td>{model.operatingTime}</td>
                                    <td>{model.order_outfit}</td>

                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Проведенные мероприятия</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Отобразите данные из `modalData` */}
                    {modalData}
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setShowModal(false)}>Закрыть</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Maintenance;
