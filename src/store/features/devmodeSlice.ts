import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface devModeState {
  devmode: boolean;
}

const initialState: devModeState = {
  devmode: false,
};

export const devmodeSlice = createSlice({
  name: 'devmode',
  initialState,
  reducers: {
    changeDevmode: (state, action: PayloadAction<{ devmode: boolean }>) => {
      state.devmode = action.payload.devmode;
    },
  },
});

export default devmodeSlice.reducer;
export const { changeDevmode } = devmodeSlice.actions;
