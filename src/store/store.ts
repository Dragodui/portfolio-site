import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { devmodeSlice } from './features/devmodeSlice';

export const store = configureStore({
  reducer: {
    devmode: devmodeSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
