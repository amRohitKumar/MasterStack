import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { registerUserThunk, loginUserThunk, submitItemsThunk, startGameThunk} from "./userThunk";
import {addItemThunk, fetchItemThunk} from "./itemThunk"
import { toast } from "react-toastify";


const initialState = {
  isLoading: false,
  hasData: false,
  appetizer:[],
  salad:[],
  maincourse: [],
  dessert: []
};

// export const registerUser = createAsyncThunk("user/registerUser", registerUserThunk);
// export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
// export const startGame = createAsyncThunk("user/startGame", startGameThunk);
// export const submitItems = createAsyncThunk("user/submitItems", submitItemsThunk);
export const addItem = createAsyncThunk("item/addItem", addItemThunk);
export const fetchItem = createAsyncThunk("item/fetchItem", fetchItemThunk);

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchItem.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchItem.fulfilled]: (state, {payload}) => {
      const { items } = payload;
      state.isLoading = false;
      state.appetizer = items.filter(item => item.parent === 1);
      state.salad = items.filter(item => item.parent === 2);
      state.maincourse = items.filter(item => item.parent === 3);
      state.dessert = items.filter(item => item.parent === 4);
      state.hasData = true;
    },
    [fetchItem.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);

    },
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
