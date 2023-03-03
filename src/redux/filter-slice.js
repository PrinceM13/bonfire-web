import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    tagSearch: ""
  },
  reducers: {
    setTagSearch: (state, action) => {
      state.tagSearch = action.payload;
    }
  }
});

export const { setTagSearch } = filterSlice.actions;

export default filterSlice.reducer;
