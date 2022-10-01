import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface userState {
    list: any
}

const initialState: userState = {
    list: null
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUsers: (state: Draft<any>, action: PayloadAction<any>) => {
            console.log(initialState.list)
        }
    }
})

export const {getUsers} = userSlice.actions;
export const selectList = (state: RootState) => state.userSlice.list;
export default userSlice.reducer;