import customFetch from "../../utils/axios";

export const addItemThunk= async (item, thunkAPI) => {
  try {
    const resp = await customFetch.post("/item/addItem", item);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const fetchItemThunk = async (_,thunkAPI) => {
  try {
    const resp = await customFetch.get("/item/fetchItem");
    return resp.data;
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
}