import React from "react";
import {Router, Routes, Route} from "react-router-dom";
import axios from "axios";


const username = "postgres"
const password = "221181"

function App() {
    const username = "postgres";
    const password = "221181";

    const fetchData = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/token/",
                {
                    username: username,
                    password: password
                }
            );
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();

    return (
        <div>
            {/* Остальная часть вашего компонента App */}
        </div>
    );
}

export default App;