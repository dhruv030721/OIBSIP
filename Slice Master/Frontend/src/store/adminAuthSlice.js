import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    status: false,
    userData: null,
};


const adminAuthSlice = createSlice({
    name: "adminAuth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null
        }
    }
})


export const { login, logout } = adminAuthSlice.actions;


export default adminAuthSlice.reducer;