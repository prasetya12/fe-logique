import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../store/reducer/musicSlice";

export const store = configureStore({
    reducer: {
        music: musicReducer,
    },
});


