import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css"

const Home = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://127.0.0.1:8000/models/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        setResponse(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
 <div className="container">
      <div className="table-container">
      <div>


        {response && (
        <Table  bordered responsive>
          <thead>
            <tr>

              <th>Number of Factory</th>
              <th>Number of Engines</th>
              <th>Date Created</th>
              <th>Number of Transmissions</th>
              <th>Number of Bridge</th>
              <th>Number of Steerable Bridge</th>
              <th>Contract Supply</th>
              <th>Date Shipping</th>
              <th>Consignee</th>
              <th>Address Delivery</th>
              <th>Equipment</th>
              <th>Client</th>
              <th>Name</th>
              <th>Model of Engines</th>
              <th>Transmission</th>
              <th>Model of Bridge</th>
              <th>Model of Steerable Bridge</th>
              <th>Service Companies</th>
            </tr>
          </thead>
          <tbody>
              {response.map((model) => (
                <tr key={model.id}>
                  <td>{model.numberFactory}</td>
                  <td>{model.numberEngines}</td>
                  <td>{model.date_created}</td>
                  <td>{model.numberTransmissions}</td>
                  <td>{model.numberBridge}</td>
                  <td>{model.numberBridgeSteerable}</td>
                  <td>{model.contractSupply}</td>
                  <td>{model.dateShipping}</td>
                  <td>{model.consignee}</td>
                  <td>{model.addresDelivery}</td>
                  <td>{model.equipment}</td>
                  <td>{model.client}</td>
                  <td>{model.name}</td>
                  <td>{model.modelsEngines}</td>
                  <td>{model.transmissions}</td>
                  <td>(model.modelsBridge)}</td>
                  <td>{model.modelsBridgeSteerable}</td>
                  <td>{model.serviceCompanies}</td>
                </tr>
              ))}
            </tbody>
          </Table>
      )}
      </div>
      </div>
 </div>

    </>
  );
};

export default Home;
