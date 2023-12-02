import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, login} from "../../Auth/store/authReducer";
import "./Header.css"
import {Button, NavLink} from "react-bootstrap";

import logo1 from "./logo1.png";

const Header = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem("login");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("login", name);
    }, [name]);
    console.log(name)

    // Check if the user is authenticated using the access token in localStorage
    const isAuthenticated = !!localStorage.getItem("token");

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(logout());

        // Remove the authentication token from the local storage
        localStorage.removeItem("token");

        // Redirect to the desired page (e.g., login page)
        navigate("");
    };


    return (
        <header className="header">
            <div className="screen">
                <div>
                    <img className="nav-logo" src={logo1} alt="logo"/>
                </div>

                <div>
                    <h1 className="element">
                        +7 999 34 44 555 TELEGRAM
                    </h1>
                </div>
                <div>
                    <h1 className="element_1">
                        Электронная сервисная книжка "Мой Силант"
                    </h1>
                </div>


                <div>
                    <div className="group-2">
                        <div className="overlap-group-wrapper">
                            {isAuthenticated ? (
                                <span className="overlap-group">
                                {auth.login}
                                    <Button className="button-auch" variant="secondary"
                                            onClick={handleLogout}>Выйти</Button>
                                </span>
                            ) : (
                                <Link to="/login">
                                    <Button className="button-auch" variant="secondary">Ауториация</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;