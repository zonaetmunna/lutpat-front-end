import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import useAPI from "../../hooks/useApi";
import authService from "../../services/auth.service";
import { IAuthData, LoginData, SignUpData } from "../../types";
import productService from "../../services/product.service";
import axios from "axios";
import httpReq from "../../services/http.service";





interface authInitState {
  user: IAuthData | null;
  isLoading: true | false,
  isError: true | false,
  error: string | null;
  status: "idle" | "pending" | "success" | "error";
};

const initialState: authInitState = {
  user: null,
  isLoading: false,
  isError: false,
  error: "",
  status: "idle",
};

// signup async thunk
export const signupUser = createAsyncThunk<IAuthData, SignUpData>(
  "auth/signupUser",
  async (SignUpData, { rejectWithValue }) => {
    try {
      // const response = await axios.post('/api/signup', userData);
      const response = await httpReq.post('/signup', SignUpData)
      console.log(response)
      return response.data;

    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk<IAuthData, LoginData>(
  "auth/loginUser",
  async (LoginData, { rejectWithValue }) => {
    try {
      // const response = await axios.post('/api/signup', userData);
      const response = await httpReq.post('/login', LoginData)
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// login asyncthunk


export const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
  }
});


export default authSlice.reducer;



