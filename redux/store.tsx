import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import { uiReducer } from './slice/uiSlice'
import { createWrapper } from 'next-redux-wrapper';
import {cartReducer} from './slice/cartSlice'


const store = configureStore({
    reducer:{
      uiReducer,
      cartReducer
    },
    devTools: true,
})

export const makeStore:any = () => store

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch