import { createSlice } from "@reduxjs/toolkit";
import { OrderProduct } from "../../types";
interface State {
  listOrder: OrderProduct[];
}
const initialState = {
  listOrder: [],
} as State;

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchListOrder: (state, action) => {
      state.listOrder = action.payload;
    },
    addListOrder: (state, action) => {
      state.listOrder = action.payload.concat(state.listOrder);
    },
    updateListOrder: (state, action) => {
      const { listOrder } = state;
      const updateProduct = action.payload;
      
      const index = listOrder.findIndex(
        (product) => product?.orderId === updateProduct?.orderId
      );      
      if (index >= 0) {
        listOrder[index] = updateProduct;
      }
    },
  },
});
export const { actions: orderAction } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
