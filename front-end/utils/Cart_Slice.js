import { createSlice } from "@reduxjs/toolkit"

const Cart_Slice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addItem : (state, action) => { 
            state.value.push(action.payload);
            
             },
        removeItem: (state, action) => {
            const index = action.payload; 
            state.value.splice(index, 1) },
        clearItems: (state, action) =>{ state.value.length = 0},

    }
})

export const { addItem, removeItem, clearItems,  } = Cart_Slice.actions

export default Cart_Slice.reducer;

