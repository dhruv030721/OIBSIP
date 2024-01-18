import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    cartItem: [],
    cartItemLength: 0
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {

            if (action.payload.category == "Beverages") {

                const newItem = {
                    name: action.payload.name,
                    totalPrice: action.payload.price.regular,
                    img: action.payload.img,
                    category: action.payload.category
                }

                const existingItemIndex = state.cartItem.findIndex(
                    (item) => item.item.name === newItem.name
                );

                if (existingItemIndex !== -1) {
                    state.cartItem[existingItemIndex].quantity += 1;
                } else {
                    state.cartItem.push({ item: newItem, quantity: 1 });
                }

                state.cartItemLength++;

            } else {
                let size = action.payload.size;
                size = size.split('-');
                let sizePrice = parseFloat(size[1].trim())
                size = size[0].trim();

                let topping = action.payload.topping;
                topping = topping.split('-');
                let toppingPrice = parseFloat(topping[1].trim())
                topping = topping[0].trim()

                let crust = action.payload.crust;
                crust = crust.split('-');
                crust = crust[0].trim()

                let totalprice = sizePrice + toppingPrice;

                const newItem = {
                    name: action.payload.name,
                    size: size,
                    crust: crust,
                    topping: topping,
                    img: action.payload.img,
                    category: action.payload.category,
                    totalPrice : totalprice
                }
                state.cartItem.push({ item: newItem, quantity: 1 })
                state.cartItemLength++;
            }

        },

        removeCartItem : (state, action) => {


            const name = action.payload

            const existingItemIndex = state.cartItem.findIndex(
                (item) => item.item.name === name
            );

            if (existingItemIndex !== -1) {
                if (state.cartItem[existingItemIndex].quantity === 1) {
                    state.cartItem.splice(existingItemIndex, 1);
                } else {
                    state.cartItem[existingItemIndex].quantity -= 1;
                }
        
                state.cartItemLength--;
            }

        }


    }
})


export const { addCartItem, removeCartItem } = cartSlice.actions;


export default cartSlice.reducer;