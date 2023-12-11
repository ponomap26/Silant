import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Infotext from "../InfoText/Infotext.jsx";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-modal";
import {Button} from "react-bootstrap";
import {GoArrowDown, GoArrowUp} from "react-icons/go";
import CreateTO from "../Maintenance/CreateTO/CreateTO.jsx";


const Main = (props) => {
        const [response, setResponse] = useState([]);
        const [data, setData] = useState([]);
        const [selectedRow, setSelectedRow] = useState(null);
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [numberFactory, setNumberFactory] = useState(null);

        const navigate = useNavigate();
        const [selectedNodeFailure, setSelectedNodeFailure] = useState(null);
        const [selectedItem, setSelectedItem] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const token = localStorage.getItem("token");
                    const response = await axios.get("http://127.0.0.1:8000/modelcar/", {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Token ${token}`,
                        },
                    });

                    setData(response.data);
                    setResponse(response.data);
                    setNumberFactory(response.data.numberFactory);

                } catch (error) {
                    console.log(error);
                }
            };

            fetchData();
        }, []);

        const
            handleModelCarEdit = (id) => {
                navigate(`/loader-details/${id}`);
            };

        const category = localStorage.getItem("category");
        const columns = [
            {
                dataField: 'edit',
                text: 'Действие',
                formatter: (cell, row) => {
                    console.log(row.id);
                    const category = localStorage.getItem('category');

                    if (category !== 'Клиент' && category !== 'Сервисная организация') {
                        return (
                            <div>
                                <span>{cell}</span>
                                <Button onClick={() => handleModelCarEdit(row.id)}>Перейти</Button>
                            </div>
                        );
                    } else {
                        return <span>{cell}</span>;
                    }
                }
            },
            {
                dataField: 'modelCar',
                text: 'Модель техники',
                filter: textFilter(),
                formatter: (cell, row) => (
                    <button onClick={() => modelCarClick(row, response)}>{cell}</button>
                )

            },
            {
                dataField: "numberFactory",
                text: "Заводской номер",
                filter: textFilter(),
                sort: true,
                sortCaret: (order, column) => {
                    if (order === "asc") {
                        return <GoArrowUp/>;
                    }
                    if (order === "desc") {
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


        return (
            <>
                <Infotext/>
                <div className="container-main" style={{marginTop: "-250px"}}>
                    <div className="table-container">
                        <BootstrapTable
                            keyField="id"
                            data={data}
                            columns={columns}
                            filter={filterFactory()}
                            defaultSorted={[{dataField: 'numberFactory', order: 'asc'}]}
                            onRowClick={(row) => setSelectedRow(row)}

                        />
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Node Failure Modal"
                        >
                            <h2>ОПИСАНИЕ</h2>
                            {selectedNodeFailure && <p>{selectedNodeFailure}</p>}
                            <button onClick={closeModal}>Close</button>
                        </Modal>

                    </div>


                </div>


            </>

        );
    }
;

export default Main;