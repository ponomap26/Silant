import React, {createContext} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"; // Import Provider from react-redux
import App from "./components/App/App.jsx";
import {store} from "./components/Auth/store";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev"; // Import store from your store file

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);