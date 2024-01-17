import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    itemDataError : null,
    ingredientDataError : null,
};

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        addItemDataError: (state, action) => {
            state.itemDataError = action.payload
        },
        addIngredientDataError : (state, action) => {
            state.ingredientDataError = action.payload
        }
    }
})


export const { addItemDataError, addIngredientDataError } = errorSlice.actions;


export default errorSlice.reducer;