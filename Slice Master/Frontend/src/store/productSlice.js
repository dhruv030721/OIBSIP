import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    items : null,
    ingredients : null,
    orders: null,
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
        },
        addOrders : (state, action) => {
            state.orders = action.payload
        },
    }
})


export const { additem, addIngredients, addOrders, addNewOrder } = productSlice.actions;


export default productSlice.reducer;