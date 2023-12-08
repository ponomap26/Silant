import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth.jsx";


import Home from "../Home/Home.jsx";
import Layout from "../Layout/Layout.jsx";
import Main from "../Data/Main/Main.jsx";
import Maintenance from "../Data/Maintenance/Maintenance.jsx";
import Forms from "../Data/Main/Form/Forms.jsx";
import Complaints from "../Data/Complaints/Complaints.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/main" element={<Main />}/>
                    <Route path="/complaint" element={<Complaints />}/>
                    <Route path="/maintenance" element={<Maintenance/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/forms" element={<Forms/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App;