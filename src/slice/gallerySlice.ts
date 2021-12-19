import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecentPhotos, searchImages } from "../api/gallery";
import { InitialStateType, IThunkAPI } from "./types";

const initialState: InitialStateType = {
  images: [],
  showLoader: false,
};

export const getRecentPhotos = createAsyncThunk<any, undefined, IThunkAPI>(
  "app/fetchImagesList",
  async (_, thunkAPI) => {
    try {
      const response = await fetchRecentPhotos();

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const searchImageByText = createAsyncThunk<any, string, IThunkAPI>(
  "app/searchImages",
  async (text, thunkAPI) => {
    try {
      const response = await searchImages(text);

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

const AppSlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentPhotos.pending, (state) => {
      state.showLoader = true;
    });
    builder.addCase(getRecentPhotos.fulfilled, (state, action) => {
      state.images = action.payload.photos.photo;
      state.showLoader = false;
    });
    builder.addCase(searchImageByText.fulfilled, (state, action) => {
      state.images = action.payload.photos.photo;
      state.showLoader = false;
    });
    builder.addCase(searchImageByText.pending, (state) => {
      state.showLoader = true;
    });
  },
});

export default AppSlice.reducer;
