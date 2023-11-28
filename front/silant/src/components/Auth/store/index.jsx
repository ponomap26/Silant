import  {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import logger from "redux-logger"
import authReducer from "./authReducer";

export const store = configureStore({
    reducer: {
        auth :authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV === 'production'?[logger]:[]))
})

