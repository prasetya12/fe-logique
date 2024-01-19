import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMusic } from "../../services/musicService";
export const getMusicSearchCall = createAsyncThunk("music/getMusicSearch", async (params) => {
    const data = await getMusic(params);
    return data;
});