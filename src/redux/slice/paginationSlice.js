import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    totalPages: "",
    activePage: "",
    totalData: "",
    perPage: ""
  },
  reducers: {
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
    setTotalData(state, action) {
      state.totalData = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
    }
  }
});

export const paginationAction = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;


export default paginationSlice;
