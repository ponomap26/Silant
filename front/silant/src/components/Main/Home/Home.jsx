import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css"

const Home = () => {
  const [response, setResponse] = useState(null);
  const [search, setSearch] = useState("");
  const [factoryNumber, setFactoryNumber] = useState("");
  const [searchedData, setSearchedData] = useState([]);

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
        const response = await axios.get("http://127.0.0.1:8000//maintence/",{
          headers: {
          Authorization: `Bearer ${token}`
        }

        })
        setResponse(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataTO();
  }, []);

  const handleSearch = () => {
    const filteredData = response?.filter((model) =>
      model.numberFactory.includes(search)
    );
    setSearchedData(filteredData);
  };

  const handleFactoryNumberChange = (event) => {
    setFactoryNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="container">


        <div className="add-container">
          <label>Factory Number:</label>
          <input
            type="text"
            value={factoryNumber}
            onChange={handleFactoryNumberChange}
          />
          <button>Add</button>
        </div>
        <div className="table-container">
          {searchedData.length > 0 && (
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Number of Factory</th>
                  <th>Date Created</th>
                  <th>Date Shipping</th>
                  <th>Equipment</th>
                  <th>Name</th>
                  <th>Model of Engines</th>
                  <th>Transmission</th>
                  <th>Model of Bridge</th>
                  <th>Model of Steerable Bridge</th>
                </tr>
              </thead>
              <tbody>
                {searchedData.map((model) => (
                  <tr key={model.id}>
                    <td>{model.numberFactory}</td>
                    <td>{model.dateCreated}</td>
                    <td>{model.dateShipping}</td>
                    <td>{model.equipment}</td>
                    <td>{model.name}</td>
                    <td>{model.modelsEngines}</td>
                    <td>{model.transmissions}</td>
                    <td>{model.modelsBridge}</td>
                    <td>{model.modelsBridgeSteerable}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {searchedData.length === 0 && response && (
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Number of Factory</th>
                  <th>Date Created</th>
                  <th>Date Shipping</th>
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
                    <td>{model.numberFactory}</td>
                    <td>{model.dateCreated}</td>
                    <td>{model.dateShipping}</td>
                    <td>{model.equipment}</td>
                    <td>{model.name}</td>
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