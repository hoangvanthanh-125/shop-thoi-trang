import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {listCart } from './../../fakeData/index'
export const fetchAllListCart = createAsyncThunk('fetchCart',
async(id,{rejectWithValue }) => {
  try{
    //callApi
    return listCart;
  }
  catch(err){
    if(!err.response){
      throw err;
    }    
    else return rejectWithValue(err.response.data);
  }
}
)
export const updateCart = createAsyncThunk('updateCart',
async(number,{ rejectWithValue }) => {
  try{
    //call APi updatep

  }catch(err) {

  }
})