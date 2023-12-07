import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    "UserDetails" :{
        "User" : localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : [],
        "isLoggedIN": false,
    }
}

const UserReduxSlice = createSlice({
    name : "UserSlice",
    initialState,
    reducers : {
        userLoginAction(state, action) {
            state.UserDetails.User.push(action.payload[0]);
            state.UserDetails.isLoggedIN = true;
            localStorage.setItem("User", JSON.stringify(state.UserDetails.User));
        },
    }
});

export const {userLoginAction} = UserReduxSlice.actions;
export default UserReduxSlice.reducer