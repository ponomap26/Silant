import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Infotext from "../InfoText/Infotext";


const Complainsts = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');



  useEffect(() => {
    if (isAuthenticated) {
      navigate('/complaint');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
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
      <Infotext />
  )
};

export default Complainsts;
