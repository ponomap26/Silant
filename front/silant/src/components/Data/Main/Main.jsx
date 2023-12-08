import {Button, Form, Table} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Infotext from "../InfoText/Infotext.jsx";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from 'react-bootstrap-table-next';
import Modal from "react-modal";
import {GoArrowDown, GoArrowUp} from "react-icons/go";

const Main = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');
    const [response, setResponse] = useState([]);
    const [selectedNodeFailure, setSelectedNodeFailure] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
                console.log(response);
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


    const columns = [
        {
            dataField: 'modelCar',
            text: 'Модель техники',
            filter: textFilter({

                className: 'my-custom-text-filter', // custom classname on input

            }),
            formatter: (cell, row) => (
                <button onClick={() => modelCarClick(row, response)}>{cell}</button>
            )

        },
        {
            dataField: 'numberFactory',
            text: 'Заводской номер',
            filter: textFilter(),
            sort: true,
            sortCaret: (order, column) => {
                if (order === 'asc') {
                    return <GoArrowUp/>;
                }
                if (order === 'desc') {
                    return <GoArrowDown/>;
                }
                return null;
            },


        },
        {
            dataField: 'modelsEngines',
            text: 'Модель двигателя',
            filter: textFilter(),
            formatter: (cell, row) => (
                <button onClick={() => modelsEnginesClick(row, response)}>{cell}</button>
            )
        },
        {
            dataField: 'numberEngines',
            text: 'Зав № двигателя',
            filter: textFilter()
        },

        {
            dataField: 'transmissions',
            text: 'Модель трансмиссии (производитель, артикул)',
            filter: textFilter(),
            formatter: (cell, row) => (
                <button onClick={() => transmissionsClick(row, response)}>{cell}</button>
            )
        },
        {
            dataField: 'numberTransmissions',
            text: 'Зав. № трансмиссии',
            filter: textFilter(),

        },
        {
            dataField: 'modelsBridge',
            text: 'Модель ведущего моста',
            filter: textFilter(),
            formatter: (cell, row) => (
                <button onClick={() => modelsBridgeyClick(row, response)}>{cell}</button>
            )
        },
        {
            dataField: 'numberBridge',
            text: 'Зав. №  ведущего моста',
            filter: textFilter(),
            formatter: (cell, row) => (
                <div>
                    <span>{cell}</span>
                    <button onClick={() => handleModelCarEdit(row.id)}>Edit</button>
                </div>
            )
        },
        {
            dataField: 'modelsBridgeSteerable',
            text: 'Модель управляемого моста',
            filter: textFilter(),
            formatter: (cell, row) => (
                <button onClick={() => modelsBridgeSteerableClick(row, response)}>{cell}</button>
            )
        },
        {
            dataField: 'dateShipping',
            text: 'Дата отгрузки с завода',
            filter: textFilter(),

        },
        {
            dataField: 'consignee',
            text: 'Получатель',
            filter: textFilter(),

        },
        {
            dataField: 'client',
            text: 'Грузополучатель(конечный потребитель)',
            filter: textFilter(),

        },
        {
            dataField: 'addressDelivery',
            text: 'Адрес поставки',
            filter: textFilter(),

        },

        {
            dataField: 'equipment',
            text: 'Комплектация',
            filter: textFilter(),

        },
        {
            dataField: 'serviceCompanies',
            text: 'Сервисная компания',
            filter: textFilter(),

        },
        {
            dataField: 'numberBridgeSteerable',
            text: 'Зав. №  управляемого моста',
            filter: textFilter(),

        },


    ];
    const modelCarClick = (row) => {

        setSelectedNodeFailure(row.modelCarDe);
        setModalIsOpen(true);
    };

    const modelsEnginesClick = (row) => {

        setSelectedNodeFailure(row.modelsEnginesDe);
        setModalIsOpen(true);
    };
    const transmissionsClick = (row) => {

        setSelectedNodeFailure(row.transmissionsDE);
        setModalIsOpen(true);
    };

    const modelsBridgeyClick = (row) => {

        setSelectedNodeFailure(row.modelsBridgeDe);
        setModalIsOpen(true);
    };
    const modelsBridgeSteerableClick = (row) => {

        setSelectedNodeFailure(row.modelsBridgeSteerableDe);
        setModalIsOpen(true);
    };


    const closeModal = () => {
        setModalIsOpen(false);
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
                    <BootstrapTable ClassName="customTable"
                                    data={response}
                                    keyField='id'
                                    columns={columns}
                                    filter={filterFactory()}
                    />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Node Failure Modal"
                    >
                        <h2>ОПИСАНИЕ</h2>
                        {selectedNodeFailure && <p>{selectedNodeFailure}</p>}
                        <button onClick={closeModal}>Закрыть</button>
                    </Modal>
                    <Form.Control
                        type="text"
                        value={cell}
                        onChange={(e) => handleInputChange(row.id, 'numberBridge', e.target.value)}
                    />
                </div>
            </div>


        </>
    );
};

export default Main;