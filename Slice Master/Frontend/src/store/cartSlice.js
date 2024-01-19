import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    cartItemLength: 0,
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const existingItemIndex = state.cartItem.findIndex(
                (item) => item.item.name === action.payload.name
            );

            if (action.payload.category === "Beverages") {
                if (existingItemIndex !== -1) {
                    state.cartItem[existingItemIndex].quantity += 1;
                    state.cartItem[existingItemIndex].totalPrice +=
                        state.cartItem[existingItemIndex].item.price;
                } else {
                    const newItem = {
                        name: action.payload.name,
                        price: action.payload.price.regular,
                        img: action.payload.img,
                        category: action.payload.category,
                    };

                    state.cartItem.push({
                        item: newItem,
                        quantity: 1,
                        totalPrice: newItem.price,
                    });
                }

                state.cartItemLength++;
            } else {

                if (existingItemIndex !== -1) {
                    state.cartItem[existingItemIndex].quantity += 1;
                    state.cartItem[existingItemIndex].totalPrice +=
                        state.cartItem[existingItemIndex].item.price;
                } else {
                    let size = action.payload.size;
                    size = size.split("-");
                    let sizePrice = parseFloat(size[1].trim());
                    size = size[0].trim();

                    let topping = action.payload.topping;
                    topping = topping.split("-");
                    let toppingPrice = parseFloat(topping[1].trim());
                    topping = topping[0].trim();

                    let crust = action.payload.crust;
                    crust = crust.split("-");
                    crust = crust[0].trim();

                    let itemPrice = sizePrice + toppingPrice;

                    const newItem = {
                        name: action.payload.name,
                        size: size,
                        crust: crust,
                        topping: topping,
                        img: action.payload.img,
                        category: action.payload.category,
                        price: itemPrice,
                    };

                    state.cartItem.push({
                        item: newItem,
                        quantity: 1,
                        totalPrice: itemPrice,
                    });
                }

                state.cartItemLength++;
            }
        },

        removeCartItem: (state, action) => {
            const name = action.payload;
            const existingItemIndex = state.cartItem.findIndex(
                (item) => item.item.name === name
            );

            if (existingItemIndex !== -1) {
                if (state.cartItem[existingItemIndex].quantity === 1) {
                    state.cartItem.splice(existingItemIndex, 1);
                } else {
                    state.cartItem[existingItemIndex].quantity -= 1;
                    state.cartItem[existingItemIndex].totalPrice -=
                        state.cartItem[existingItemIndex].item.price;
                }

                state.cartItemLength--;
            }
        },


        removeWholeItem: (state, action) => {
            const name = action.payload
            const existingItemIndex = state.cartItem.findIndex((item) => item.item.name === name)

            state.cartItemLength -= state.cartItem[existingItemIndex].quantity;
            state.cartItem.splice(existingItemIndex,1);
        },


        emptyCart: (state,action) => {
            state.cartItem.splice(0,state.cartItem.length)
            state.cartItemLength = 0;
        }
    },
});

export const { addCartItem, removeCartItem, removeWholeItem , emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
