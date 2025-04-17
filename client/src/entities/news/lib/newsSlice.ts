import { createSlice } from "@reduxjs/toolkit";
import type { SnippetNews } from "../model/types";
import { getNews } from "./newsThunk";
import { exampleData } from "../../../shared/lib/exampleData";

const initialState: {
  news: SnippetNews[];
} = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
    }).addCase(getNews.rejected, (state) => {
        state.news = exampleData
    });
  },
});

// export const {} = newsSlice.actions;

export default newsSlice.reducer;
