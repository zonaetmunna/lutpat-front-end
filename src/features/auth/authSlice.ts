import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthData, LoginData, SignUpData, authInitState } from "../../types";
import axios from "axios";


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
      // const response = await axios.post('/signup', userData);
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, SignUpData)
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      console.log(response.data.data)
      return response.data.data;

    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk<IAuthData, LoginData>(
  "auth/loginUser",
  async (LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, LoginData);
      // const response = await httpReq.post('/auth/login', LoginData)
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      console.log(response.data.data);
      console.log(response.data);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// login asyncthunk


export const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.user = null
    },
    subscribedUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    }

  },
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

export const { logOut, subscribedUser } = authSlice.actions;
export default authSlice.reducer;



