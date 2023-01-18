import {  AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import useAPI from "../../hooks/useApi";
import authService from "../../services/auth.service";


interface userState{
  data: IUserData | null;
  error: string | null;
  status: "idle" | "pending" | "success" | "error";
};

const initialState: userState = {
  data: null,
  error: null,
  status: "idle",
};

// signup asyncthunk


// login asyncthunk


export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: {}
});


export default userSlice;

 
 
