import { createSlice } from "@reduxjs/toolkit";

// todo - status(complete, incomplete), text, id
const initialState = {
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

  }
});



export default musicSlice.reducer;