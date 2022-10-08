import {configureStore} from '@reduxjs/toolkit';
import itemSlice from './features/item/itemSlice';
import userSlice from "./features/user/userSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        item: itemSlice
    }
});

export default store;