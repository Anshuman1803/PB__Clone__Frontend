import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    "UserDetails": {
        "User": localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : [],
        "isLoggedIN": localStorage.getItem("User") ? true : false,
    }
}

const UserReduxSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        userLoginAction(state, action) {
            state.UserDetails.User.push(action.payload[0]);
            state.UserDetails.isLoggedIN = true;
            localStorage.setItem("User", JSON.stringify(state.UserDetails.User));
        },
        userLogOut(state, action) {
            state.UserDetails.User = []
            state.UserDetails.isLoggedIN = false;
            localStorage.removeItem("User")
        }
    }
});

export const { userLoginAction, userLogOut } = UserReduxSlice.actions;
export default UserReduxSlice.reducer