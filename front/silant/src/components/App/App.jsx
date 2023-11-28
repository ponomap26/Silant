import React from "react";
import {Routes, Route} from "react-router-dom";
import Auth from "../Auth/Auth.jsx";
;
import Compres from "../Comres/Compes";
import Home from "../Main/Home/Home";

function App() {
    return (
        <>
            <Routes>

                <Route path="/" element={<Auth/>}/>
                <Route path="/main" element={<Home/>}/>

            </Routes>
        </>
    );
}

export default App;