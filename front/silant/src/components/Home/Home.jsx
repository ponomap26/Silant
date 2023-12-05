import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [response, setResponse] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      navigate("/main");
    }
  }, [navigate]);

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token");
    const fetchDataTO = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000//maintence/", {
          headers: {
            Authorization: `Bearer ${token}`
          }

        });
        setResponse(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataTO();
  }, []);

  return (
    <>
      <div className="container">
        <div className="table-container">
          {response && (
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Mодель</th>
                  <th>Number of Factory</th>
                  <th>Date Created</th>
                  <th>Equipment</th>
                  <th>Name</th>
                  <th>Model of Engines</th>
                  <th>Transmission</th>
                  <th>Model of Bridge</th>
                  <th>Model of Steerable Bridge</th>
                </tr>
              </thead>
              <tbody>
                {response.map((model) => (
                  <tr key={model.id}>
                    <td>{model.modelCar}</td>
                    <td>{model.numberFactory}</td>
                    <td>{model.dateCreated}</td>
                    <td>{model.equipment}</td>
                    <td>{model.modelCar}</td>
                    <td>{model.modelsEngines}</td>
                    <td>{model.transmissions}</td>
                    <td>{model.modelsBridge}</td>
                    <td>{model.modelsBridgeSteerable}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;