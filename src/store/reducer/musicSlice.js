import { createSlice } from "@reduxjs/toolkit";
import { getMusicSearchCall } from "../actions/musicAction";
// todo - status(complete, incomplete), text, id
const initialState = {
  isLoading: false,
  data: [
    { id: 1, text: "Create a react app", status: "incomplete" },
    { id: 2, text: "Create a redux app", status: "incomplete" },
    { id: 3, text: "Create a redux toolkit app", status: "incomplete" },
  ],
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