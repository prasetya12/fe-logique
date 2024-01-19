import { createSlice } from "@reduxjs/toolkit";
import { getMusicSearchCall } from "../actions/musicAction";
// todo - status(complete, incomplete), text, id
const initialState = {
  isLoading: false,
  data: [],
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMusicSearchCall.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMusicSearchCall.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload?.data?.results;
    });
  }
});



export default musicSlice.reducer;