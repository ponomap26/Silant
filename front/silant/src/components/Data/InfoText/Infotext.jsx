import axios from "axios";
import {Button} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Infotext.css";

const Infotext = () => {
    const navigate = useNavigate();
    const company = localStorage.getItem("company");
    const category = localStorage.getItem("category");

    const [activeButton, setActiveButton] = useState(null);

    const handleTechnicalMaintenanceClick = () => {
        navigate("/maintenance");
        setActiveButton("technicalMaintenance");
    };

    const handleComplaintOnClick = () => {
        navigate("/complaint");
        setActiveButton("complaint");
    };

    const handleGenralClick = () => {
        navigate("/main");
        setActiveButton("general");
    };

    return (
        <div className="container"  style={{marginTop: "-50px"}}>
            <div className="table-container">
                <div className="category-category">
                    <h1>Категория - "{category}"</h1>

                </div>
                <div className="category-category">
                    <h1> Компания - "{company}" </h1>
                </div>
                <div className="category-text">
                    <p>Информация о комплектации и техническом обслуживании вашей техники</p>
                </div>

                <div className="button-container">
                    <Button
                        className={`button-gen ${activeButton === "general" ? "active" : ""}`}
                        onClick={handleGenralClick}
                    >
                        Общая информация
                    </Button>
                    <Button
                        className={`button-to ${activeButton === "technicalMaintenance" ? "active" : ""}`}
                        onClick={handleTechnicalMaintenanceClick}
                    >
                        Техническое обслуживание
                    </Button>
                    <Button
                        className={`button-rec ${activeButton === "complaint" ? "active" : ""}`}
                        onClick={handleComplaintOnClick}
                    >
                        Рекламация
                    </Button>
                </div>
            </div>
        </div>

    )
        ;
};

export default Infotext;
