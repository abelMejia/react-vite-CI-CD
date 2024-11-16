import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
        //aqui se pueden agregar mas propiedades y sus repectivos slices
        //ejemplo:
        //pokemon: pokemoReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch