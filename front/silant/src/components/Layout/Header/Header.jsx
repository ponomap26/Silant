import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, login} from "../../Auth/store/authReducer";
import "./Header.css"
import {Button} from "react-bootstrap";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem("login");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("login", username);
    }, [username]);

    // Check if the user is authenticated
    const isAuthenticated = !!localStorage.getItem("token");

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(logout());

        // Remove the authentication token from the local storage
        localStorage.removeItem("token");

        navigate.push("/");
    };

    return (
        <div>
            <div className="screen">
                {/*<img className="SGN" src={logo1} alt="logo" />*/}
                <nav className="group">
                    <Link className="text-wrapper" to="/">
                        Главная
                    </Link>
                    <Link className="div">Тарифы</Link>
                    <Link className="text-wrapper-2">FAQ</Link>
                </nav>
                <div className="group-2">
                    <div className="overlap-group-wrapper">
                        {isAuthenticated ? (
                            <span className="overlap-group">
                {auth.login}
                                <Button onClick={handleLogout}>Выйти</Button>
              </span>
                        ) : (
                            <Link to="/login">
                                <Button>Ауториация</Button>
                            </Link>
                        )}
                    </div>
                    <div className="element_1">
                        Электронная сервисная книжка
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;