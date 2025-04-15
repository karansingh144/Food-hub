import {createSlice} from "@reduxjs/toolkit"
import { act } from "react";

const initialState = {
    carts:[]
}
    
//cart slice

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        // add to cart
        addToCart:(state, action) =>{
            //  state.carts = [...state.carts,action.payload]  
            const itemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);

            if(itemIndex >= 0){
                state.carts[itemIndex].qnty += 1
            }else{
                const temp = {...action.payload, qnty:1 }
                state.carts =[...state.carts, temp]
            }
             
        },

        // removePartricularItem 
        removeToCart:(state,action)=>{
            const data =state.carts.filter((ele) =>ele.id !== action.payload);
            state.carts = data 
        },

        // removeSingleItems 

        removeSingleItems:(state, action)=>{
            const itemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id);
            if(state.carts[itemIndex_dec].qnty >= 1){
                state.carts[itemIndex_dec].qnty -= 1
            }
        },
        // clear cart 
        emptyCartItem :(state,action)=>{
            state.carts = []    
        }

    }
})


export const {addToCart,removeToCart,removeSingleItems, emptyCartItem} =  cartSlice.actions;

export default cartSlice.reducer;