import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { paginationAction } from "./paginationSlice";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  COMPLETE: "complete"
};

const dataSlice = createSlice({
  name: "api",
  initialState: {
    storeData: {},
    status: STATUS.IDLE
  },
  reducers: {
    setData(state, action) {
      state.storeData = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    }
  }
});

export const dataAction = dataSlice.actions;

export const dataReducer = dataSlice.reducer;

export default dataSlice;

export const getData = () => async (dispatch, getState) => {
  dispatch(dataAction.setStatus(STATUS.LOADING));

  try {
    const response = await axios.get("https://reqres.in/api/users/");
    dispatch(dataAction.setData(response.data));
    dispatch(paginationAction.setTotalPages(response.data.total_pages));
    dispatch(paginationAction.setActivePage(response.data.page));
    dispatch(paginationAction.setTotalData(response.data.total));
    dispatch(paginationAction.setPerPage(response.data.per_page));
    dispatch(dataAction.setStatus(STATUS.COMPLETE));

    console.log(response.data);
  } catch (error) {
    console.log(error);
    dispatch(dataAction.setStatus(STATUS.ERROR));
  }
};

export const changePage = data => async (dispatch, getState) => {
  dispatch(dataAction.setStatus(STATUS.LOADING));

  try {
    const response = await axios.get(
      `https://reqres.in/api/users/?page=${data}`
    );
    dispatch(dataAction.setData(response.data));
    dispatch(paginationAction.setTotalPages(response.data.total_pages));
    dispatch(paginationAction.setActivePage(response.data.page));
    dispatch(paginationAction.setTotalData(response.data.total));
    dispatch(paginationAction.setPerPage(response.data.per_page));

    dispatch(dataAction.setStatus(STATUS.COMPLETE));

    console.log(response.data);
  } catch (error) {
    console.log(error);
    dispatch(dataAction.setStatus(STATUS.ERROR));
  }
};
