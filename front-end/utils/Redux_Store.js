import { configureStore }  from "@reduxjs/toolkit"
import Cart_Slice from "./Cart_Slice";



export const Redux_Store = configureStore( {
    reducer: {
        cart: Cart_Slice
    }
})


