import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface State {
  isOpenSideBar: boolean;
  isOpenSearchMobile: boolean;
  isOpenOverLay:boolean;
  isOpenFilterMobile:boolean
}
const initialState = {
  isOpenSideBar: false,
  isOpenSearchMobile: false,
  isOpenOverLay:false,
  isOpenFilterMobile:false
} as State;

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
   
    openSideBar: (state) => {      
      state.isOpenSideBar = true;
    },
    closeSideBar: (state) => {
      state.isOpenSideBar = false;
    },
    openSearchMobile: (state) => {
      state.isOpenSearchMobile = true;
    },
    closeSearchMobile: (state) => {
      state.isOpenSearchMobile = false;
    },
    openOverlay: (state) => {
      state.isOpenOverLay = true;
    },
    closeOverlay: (state) => {
      state.isOpenOverLay = false;
    },
    openFilterMobile: (state) => {
      state.isOpenFilterMobile = true;
    },
    closeFilterMobile: (state) => {
      state.isOpenFilterMobile = false;
    },
  },

  extraReducers: (builder) =>
    builder.addCase(HYDRATE, (state) => {
      return { ...state };
    }),
});
export const { reducer: uiReducer } = uiSlice;
export const { actions: uiActions } = uiSlice;
