import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Auth.css"
import {Button} from "react-bootstrap";
import Modal from "react-modal";


const Auth = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [username, setLogin] = useState(""); // изменение
    const [password, setPassword] = useState(""); // изменение
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Please enter a login and password");
            return;
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/token/",
                {
                    username,
                    password
                }
            );
            const token = response.data.token;


            console.log(response); // изменение

            localStorage.setItem("token", token);
            navigate("/main"); // Redirect to the home page*/
            const category = response.data.category;
            console.log(category); // изменение
            localStorage.setItem("category", category);
            const company = response.data.company;
            localStorage.setItem("company", company);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Invalid login or password");
            } else {
                setError("Не правильный логин или пароль");
                setModalOpen(true);
            }
        }
    };

    return (
        <div className="authpage">

            <div className="wrapper">
                <div className="left-side">
                    <div className="">Для получения полной информации, необходимо авторизоваться.</div>
                    {/*<img src={image} alt="Изображение для страницы авторизации" />*/}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="decor">
                        {/*<div className="tabs">*/}
                        {/*    <a href="#" className="tab tab-active">Войти</a>*/}
                        {/*    */}
                        {/*</div>*/}

                        <label htmlFor="login">
                            логин
                            <input
                                onChange={(e) => setLogin(e.target.value)}
                                value={username}
                                type="text"
                                placeholder="Login"
                            />
                        </label>
                        <br/>
                        <label htmlFor="password">
                            пароль
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password"
                            />
                        </label>
                        <br/>

                        <Button className="button-auch_1" type="submit">Войти</Button>
                        <Modal
                            isOpen={modalOpen}
                            onRequestClose={() => setModalOpen(false)}
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                },
                                content: {
                                    borderRadius: '5px',
                                    width: '200px',
                                    height: '150px',
                                    padding: '20px',
                                    margin: 'auto',
                                },
                            }}

                        >
                            {error}
                            <Button onClick={() => setModalOpen(false)}>Close</Button>
                        </Modal>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;