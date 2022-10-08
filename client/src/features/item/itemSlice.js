import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { registerUserThunk, loginUserThunk, submitItemsThunk, startGameThunk} from "./userThunk";
import {addItemThunk} from "./itemThunk"
import { toast } from "react-toastify";


const initialState = {
  isLoading: false
};

// export const registerUser = createAsyncThunk("user/registerUser", registerUserThunk);
// export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
// export const startGame = createAsyncThunk("user/startGame", startGameThunk);
// export const submitItems = createAsyncThunk("user/submitItems", submitItemsThunk);
export const addItem = createAsyncThunk("item/addItem", addItemThunk);

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
  },
  extraReducers: {
    [addItem.pending]: (state) => {
      state.isLoading = true;
    },
    [addItem.fulfilled]: (state,{payload}) => {
      state.isLoading = false;
      toast.success(payload);
    },
    [addItem.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    }
  },
});

// export const {addItem} = itemSlice.actions;
export default itemSlice.reducer;
