import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import build from "next/dist/build";
import { CartType } from "../../pages/cart";
import { fetchAllListCart } from "../actions/cartActions";
interface TypeState {
  listCart:CartType[],
  error:null | string
}
const initialState = {
  listCart:[] as CartType[]
} as TypeState
const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    fetchAllCart:(state,action) => {
      state.listCart = action.payload;
    },
    updateCart:(state,action) => {
      const  productUpdated = action.payload;
      const { listCart } = state;
      const index = listCart.findIndex(pro => pro.id === productUpdated.id);
      listCart[index] = productUpdated;
    },
    deleteCart:(state,action) => {
      const cartDeleted = action.payload;
      state.listCart = state.listCart.filter(pro => pro.id !== cartDeleted.id);
    }
    
  },
  extraReducers:(builder) =>
    builder.addCase(HYDRATE, (state) => {
      return { ...state };
    })
})
export const { reducer:cartReducer } = cartSlice ;
export const { actions : cartActions } = cartSlice;