import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    "UserDetails": {
        "User": localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : [],
        "isLoggedIN": localStorage.getItem("User") ? true : false,
        "myOrder": localStorage.getItem("myOrder") ? JSON.parse(localStorage.getItem("myOrder")) : [],
        "tempCourse": []
    }
}

const UserReduxSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        userLoginAction(state, action) {
            console.log(action.payload)
            state.UserDetails.User.push(action.payload);
            state.UserDetails.isLoggedIN = true;
            localStorage.setItem("User", JSON.stringify(state.UserDetails.User));
        },
        userLogOut(state, action) {
            state.UserDetails.User = []
            state.UserDetails.isLoggedIN = false;
            localStorage.removeItem("User")
        },

        addTempCourse(state, action) {
            state.UserDetails.tempCourse = action.payload;
        },

        removeTempCourse(state, action) {
            state.UserDetails.tempCourse = [];
        },

        confirmOrder(state, action) {
            state.UserDetails.myOrder.push(action.payload);
            localStorage.setItem("myOrder", JSON.stringify(state.UserDetails.myOrder));

            axios.post("https://pb-clone.onrender.com/storeData",action.payload).then((response)=>{
                console.log(response.data)
            })
        }
    }
});

export const { userLoginAction, userLogOut, addTempCourse, removeTempCourse, confirmOrder } = UserReduxSlice.actions;
export default UserReduxSlice.reducer