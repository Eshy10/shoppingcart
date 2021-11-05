import { createSlice } from '@reduxjs/toolkit';
import { DataList } from './actionTypes';
import { data } from "../data"
import { RootState } from './store';

const initialState: DataList[] = data;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
  });

  export const productReducer = productSlice.reducer;

  export const getAllProducts = (state: RootState) => state.products;