import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth.jsx";


import Home from "../Home/Home.jsx";
import Layout from "../Layout/Layout.jsx";
import Main from "../Data/Main/Main.jsx";
import Complainsts from "../Data/Complaints/Complaints.jsx";
import Maintenance from "../Data/Maintenance/Maintenance";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/main" element={<Main />}/>
                    <Route path="/complaint" element={<Complainsts />}/>
                    <Route path="/maintenance" element={<Maintenance/>}/>
                    <Route path="/login" element={<Auth/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App;