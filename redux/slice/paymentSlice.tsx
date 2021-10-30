import { createSlice } from "@reduxjs/toolkit";
import {CartType} from './../../types'
interface State{
  listPayment:CartType[]
}
const initialState = {
listPayment:[]
} as State;
 const paymentSlice = createSlice({
  name:'payment',
  initialState,
  reducers:{
    updatePayment: (state, action) => {
      const productUpdated = action.payload;
      const { listPayment } = state;
      const index = listPayment.findIndex((pro) => pro.id === productUpdated.id);
      listPayment[index] = productUpdated;
    },
    deletePayment: (state, action) => {
      const cartDeleted = action.payload;
      state.listPayment = state.listPayment.filter(
        (pro) => pro.id !== cartDeleted.id
      );
    },
  
    fetchListPayment:(state,action) => {
      state.listPayment = action.payload;
    }
  }
})
export const {actions:paymentAction} = paymentSlice;
export const {reducer : paymentReducer} = paymentSlice;
