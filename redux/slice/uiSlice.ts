import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface State {
  isOpenSideBar: boolean;
  isOpenSearchMobile: boolean;
  isOpenOverLay: boolean;
  isOpenOverLay2: boolean;
  isOpenFilterMobile: boolean;
  isOpenUserInfo: boolean;
  isOpenModal: boolean;
  headModal: string;
  bodyModal: any;
  isOpenListColor:boolean
}
const initialState = {
  isOpenSideBar: false,
  isOpenSearchMobile: false,
  isOpenOverLay: false,
  isOpenOverLay2: false,
  isOpenFilterMobile: false,
  isOpenUserInfo: false,
  isOpenModal: false,
  headModal: "",
  bodyModal: null,
  isOpenListColor:false
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
    openOverlay2: (state) => {
      state.isOpenOverLay2 = true;
    },
    closeOverlay2: (state) => {
      state.isOpenOverLay2 = false;
    },
    openFilterMobile: (state) => {
      state.isOpenFilterMobile = true;
    },
    closeFilterMobile: (state) => {
      state.isOpenFilterMobile = false;
    },
    openUserInfo: (state) => {
      state.isOpenUserInfo = true;
    },
    closeUserInfo: (state) => {
      state.isOpenUserInfo = false;
    },
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
    openListColor: (state) => {
      state.isOpenListColor = true;
    },
    closeListColor: (state) => {
      state.isOpenListColor = false;
    },
    fetchHeadModal: (state, action) => {
      state.headModal = action.payload;
    },
    fetchBodyModal: (state, action) => {
      state.bodyModal = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder.addCase(HYDRATE, (state) => {
      return { ...state };
    }),
});
export const { reducer: uiReducer } = uiSlice;
export const { actions: uiActions } = uiSlice;
