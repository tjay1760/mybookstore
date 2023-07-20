import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => {
      produce(state, (draftState) => {
        draftState.message = 'Under construction';
      });
    },
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
