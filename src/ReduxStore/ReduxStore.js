import { configureStore } from "@reduxjs/toolkit";
import UserReduxSliceReducer from "../ReduxSlice/UserReduxSlice";
const ReduxStore = configureStore({
    reducer:{
        AppUser : UserReduxSliceReducer
    }
});

export default ReduxStore