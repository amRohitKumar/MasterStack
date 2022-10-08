import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserThunk, loginUserThunk, submitItemsThunk, startGameThunk} from "./userThunk";
import { toast } from "react-toastify";


import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addTokenToLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
};

export const registerUser = createAsyncThunk("user/registerUser", registerUserThunk);
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const startGame = createAsyncThunk("user/startGame", startGameThunk);
export const submitItems = createAsyncThunk("user/submitItems", submitItemsThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
      toast.success("Logout Successfully");
    },
    addItem: (state, payload) => {

      if(payload.cost <= state.user.amount){
        state.items = {
          ...state.items,
          payload
        };
        state.user.amount-=payload.cost;
        state.user.points+=payload.points;
        addUserToLocalStorage(state.user);
     
        toast.success("Added Successfully");
      }
      else{
        toast.error("Insufficient Amount");
      }
    },
    removeItem: (state,payload) => {

      state.items=state.items.filter(item=> item.id!=payload.id);
      state.user.amount+=payload.cost;
      state.user.points-=payload.points;
      addUserToLocalStorage(state.user);
      toast.success("Removed Successfully");
    },
    inc: (state) =>{
      state.user.points+=1;
      toast.success("incremented");
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user,token } = payload;
      state.isLoading = false;
      state.token=token;
      state.user = user;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Hello there ${user.name}`);
    },
    [registerUser.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user,token } = payload;
      state.isLoading = false;
      state.token=token;
      state.user = user;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Welcome back, ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [submitItems.pending]: (state) => {
      state.isLoading = true;
    },
    [submitItems.fulfilled]: (state, {payload}) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
       toast.success('Ended');
    },
    [submitItems.rejected]: (state, {payload}) =>{
      state.isLoading=false;
      toast.error(payload);
    },
    [startGame.pending]: (state) => {
      state.isLoading=true;
    },
    [startGame.fulfilled]: (state, {payload}) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success('Started');
    },
    [startGame.rejected]: (state, {payload}) => {
      state.isLoading=false;
      toast.error(payload);
    }
  },
});

export const { logoutUser,addItem,removeItem,inc } = userSlice.actions;
export default userSlice.reducer;
