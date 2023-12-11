import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth.jsx";
import Home from "../Home/Home.jsx";
import Layout from "../Layout/Layout.jsx";
import Main from "../Data/Main/Main.jsx";
import Maintenance from "../Data/Maintenance/Maintenance.jsx";
import Forms from "../Data/Main/Form/Forms.jsx";
import Complaints from "../Data/Complaints/Complaints.jsx";
import LoaderDetails from "../Data/Main/LoaderDetails/LoaderDetails.jsx";
import CreateTO from "../Data/Maintenance/CreateTO/CreateTO";
import LoaderMaintains from "../Data/Maintenance/LoaderMaintens/LoaderMaintens.jsx";
import LoaderComplaints from "../Data/Complaints/LoaderComplaints/LoaderComplaints";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/complaint" element={<Complaints />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/loader-details/:id" element={<LoaderDetails />} />
        <Route path="/loader-maintens/:id" element={<LoaderMaintains />} />
        <Route path="/create-to" element={<CreateTO />} />
        <Route path="/complaint-details/:id" element={<LoaderComplaints />} />
      </Route>
    </Routes>
  );
}

export default App;
