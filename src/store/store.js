import { configureStore } from "@reduxjs/toolkit";
import zeldaReducer from "./zeldaSlice.js";

export const store = configureStore({
    reducer: {
        zelda: zeldaReducer,
    },
});