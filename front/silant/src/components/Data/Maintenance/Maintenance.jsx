import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Infotext from '../InfoText/Infotext.jsx';
import axios from 'axios';
import { Table, Modal } from 'react-bootstrap';

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
        const response = await axios.get('http://127.0.0.1:8000/maintence/', {
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

  return (
    <div>
      <Infotext />
      <div className="container" style={{ marginTop: '-600px' }}>
        <div className="table-container">
          {response && (
            <Table bordered responsive>
              <thead>
                <tr>
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
                    <td>{model.Number}</td>
                    <td>
                      <a
                        href="#"
                        onClick={() => handleModalOpen(model)}
                        style={{ color: 'blue', textDecoration: 'underline' }} // Пример стиля ссылки
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
          <Modal.Title>Заголовок модального окна</Modal.Title>
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
