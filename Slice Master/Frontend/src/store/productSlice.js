import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    items : null
}
;


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        additem: (state, action) => {
            state.items = action.payload
        },
    }
})


export const { additem } = productSlice.actions;


export default productSlice.reducer;