import customFetch from "../../utils/axios";
import authHeader from "../../utils/userAuthHeader";

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/register", user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/login", user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const submitItemsThunk = async(user ,thunkAPI) => {
  try {
    
    const resp = await customFetch.post("/item/submit", user, authHeader(thunkAPI));
    return resp.data;
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
}

export const startGameThunk = async(_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/item/start", authHeader(thunkAPI));
    return resp.data;
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
}
