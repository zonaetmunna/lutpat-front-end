import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IAuthData, LoginData, SignUpData, authInitState } from "../../types";


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
      let response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, SignUpData)
      const token = response.data.data.token;
      const userToken = token.replace("Bearer ", "");
      response.data.data.token=userToken
      const modifiedData = { ...response.data.data }; // Modify the token in the response data
     
      localStorage.setItem("token", userToken);
      console.log(modifiedData);
      return modifiedData;

    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
// login async thunk
export const loginUser = createAsyncThunk<IAuthData, LoginData>(
  "auth/loginUser",
  async (LoginData, { rejectWithValue }) => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, LoginData);
      // const response = await httpReq.post('/auth/login', LoginData)
      const token = response.data.data.token;
      const userToken = token.replace("Bearer ", "");
      response.data.data.token=userToken
      const modifiedData = { ...response.data.data }; // Modify the token in the response data
     
      localStorage.setItem("token", userToken);
      console.log(modifiedData);
      return modifiedData;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);




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



