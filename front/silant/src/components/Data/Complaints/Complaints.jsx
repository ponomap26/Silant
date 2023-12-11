import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Infotext from "../InfoText/Infotext";
import BootstrapTable from 'react-bootstrap-table-next';

import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import Modal from 'react-modal';
import "./Complainsts.css"
import {GoArrowDown, GoArrowUp} from "react-icons/go"
import {Button} from "react-bootstrap";

const Complaints = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');
    const [response, setResponse] = useState([]);
    const [selectedNodeFailure, setSelectedNodeFailure] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/complaint');
        } else {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://127.0.0.1:8000/complaints/", {
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

   const
            handleModelCarEdit = (id) => {
                navigate(`/complaint-details/${id}`);
            };
    const columns = [
       {
                dataField: 'edit',
                text: 'Действие',
                formatter: (cell, row) => {
                    console.log(row.id);
                    const category = localStorage.getItem('category');

                    if (category !== 'Клиент' ) {
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
            dataField: 'carNumber',
            text: 'Зав № машины',
            filter: textFilter()
        },
        {
            dataField: 'dataRecovery',
            text: 'Дата отказа',
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
            dataField: 'operatingTime',
            text: 'Наработка, м/час',
            filter: textFilter()
        },
        {
            dataField: 'nodeFailure',
            text: 'Узел отказа',
            filter: textFilter(),
            formatter: (cell, row) => (
                <button onClick={() => handleNodeFailureClick(row, response)}>{cell}</button>
            )
        },
        {
            dataField: 'descriptionFailure',
            text: 'Описание отказа',
            filter: textFilter()
        },
        {
            dataField: 'metodRecovery',
            text: 'Способ восстановления',
            filter: textFilter(),
            formatter: (cell, row) => (
                <button onClick={() => handlemetodRecoveryClick(row, response)}>{cell}</button>
            )
        },
        {
            dataField: 'partSpare',
            text: 'Используемые запасные части',
            filter: textFilter()
        },


        {
            dataField: 'downtime',
            text: 'Время простоя',
            filter: textFilter()
        },


        {
            dataField: 'componyServisor',
            text: 'Сервисная компания',
            filter: textFilter()
        },

    ];

    const handleNodeFailureClick = (row) => {

        setSelectedNodeFailure(row.nodeFailureDE);
        setModalIsOpen(true);
    };

    const handlemetodRecoveryClick = (row) => {

        setSelectedNodeFailure(row.metodRecoveryDE);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <Infotext/>
            <div className="container-complans" >
                <div className="table-container">

                    <BootstrapTable ClassName="customTable"
                                    data={response}
                                    keyField='id'
                                    columns={columns}
                                    filter={filterFactory()}
                                    defaultSorted={[{dataField: 'dataRecovery', order: 'asc'}]}
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
};

export default Complaints;
