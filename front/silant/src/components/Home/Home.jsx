import React, {useState, useEffect} from "react";
import axios from "axios";
// import {Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import {useNavigate} from "react-router-dom";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from 'react-bootstrap-table-next';
import Modal from "react-modal";
import {GoArrowDown, GoArrowUp} from "react-icons/go";


const Home = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');
    const [response, setResponse] = useState([]);
    const [selectedNodeFailure, setSelectedNodeFailure] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/main");
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/modelNou/");
                setResponse(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
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
                    return <GoArrowDown />;
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
            filter: textFilter()
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


return (
    <>
        <div className="container" style={{marginTop: "-200px"}}>
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
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>
        </div>
    </>

)

}
;

export default Home;
