import { createSlice } from "@reduxjs/toolkit"
import ProductModel from "../model/ProductModel";

const initialState =
{
    cartItem: []
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {

            const newItem = new ProductModel(
                action.payload.name,
                action.payload.price,
                action.payload.size,
                action.payload.crust,
                action.payload.topping,
                action.payload.img
            )

            state.cartItem.push(newItem)
        },
    }
})


export const { addCartItem } = cartSlice.actions;


export default cartSlice.reducer;