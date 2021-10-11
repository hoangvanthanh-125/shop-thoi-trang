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
    fetchListPayment:(state,action) => {
      state.listPayment = action.payload;
    }
  }
})
export const {actions:paymentAction} = paymentSlice;
export const {reducer : paymentReducer} = paymentSlice;
