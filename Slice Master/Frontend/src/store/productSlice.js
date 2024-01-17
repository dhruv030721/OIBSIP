import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    items : null,
    ingredients : null
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        additem: (state, action) => {
            state.items = action.payload
        },
        addIngredients : (state, action) => {
            state.ingredients = action.payload
        }
    }
})


export const { additem, addIngredients } = productSlice.actions;


export default productSlice.reducer;