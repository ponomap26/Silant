import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Infotext from '../InfoText/Infotext.jsx';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import Modal from "react-modal";
import './Maintenance.css'
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import {GoArrowDown, GoArrowUp} from "react-icons/go";
import BootstrapTable from "react-bootstrap-table-next";

const Maintenance = () => {
        const [response, setResponse] = useState(null);
        const [showModal, setShowModal] = useState(false);
        const [data, setData] = useState([]);
        const [modalData, setModalData] = useState(null);
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [selectedNodeFailure, setSelectedNodeFailure] = useState(null);
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
                    setData(response.data);
                    console.log(response)
                } catch (error) {
                    console.log(error);
                }
            };

            fetchDataTO();
        }, []);


        const handleModelCarEdit = (id) => {
            navigate(`/loader-maintens/${id}`);
        };


        const columns = [
            {
                dataField: 'edit',
                text: 'Действие',
                formatter: (cell, row) => {
                    console.log(row.id);


                    return (
                        <div>
                            <span>{cell}</span>
                            <Button onClick={() => handleModelCarEdit(row.id)}>Перейти</Button>
                        </div>
                    );

                }
            },
            {
                dataField: 'Number',
                text: 'Заводской номер',
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
                dataField: "carTo",
                text: "Вид ТО",
                filter: textFilter(),
                formatter: (cell, row) => (
                    <button onClick={() => modelsCarToClick(row, response)}>{cell}</button>
                )

            },
            {
                dataField: 'dataTo',
                text: 'Дата проведения ТО',
                filter: textFilter(),

            },
            {
                dataField: 'operatingTime',
                text: "Наработка",
                filter: textFilter()
            },

            {
                dataField: 'order_outfit',
                text: 'Номер заказ наряда',
                filter: textFilter(),

            },
            {
                dataField: 'data_order_outfit',
                text: 'Дата заказ наряда',
                filter: textFilter(),

            },
            {
                dataField: 'serviceCompanies',
                text: 'Сервисная компания',
                filter: textFilter(),

            },

        ];


        const modelsCarToClick = (row) => {
            setSelectedNodeFailure(row.carToDe);
            setModalIsOpen(true);
        };


        const closeModal = () => {
            setModalIsOpen(false);
        };


        return (
            <>
                <Infotext/>
                <div className="container-main" style={{marginTop: "-80px"}}>
                    <div className="table-container">
                        <BootstrapTable
                            keyField="id"
                            data={data}
                            columns={columns}
                            filter={filterFactory()}
                            defaultSorted={[{dataField: 'Number', order: 'asc'}]}
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


export default Maintenance;
