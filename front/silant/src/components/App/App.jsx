import React from "react";
import {Routes, Route} from "react-router-dom";
import Auth from "../Auth/Auth.jsx";


import Home from "../Main/Home/Home.jsx";
import Layout from "../Layout/Layout.jsx";
import Main from "../Main/Main";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/login" element={<Auth/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App;