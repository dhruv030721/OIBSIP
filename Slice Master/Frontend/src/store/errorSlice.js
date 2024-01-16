import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    dataError : null
};

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        addError: (state, action) => {
            state.dataError = action.payload
        },
    }
})


export const { addError } = errorSlice.actions;


export default errorSlice.reducer;