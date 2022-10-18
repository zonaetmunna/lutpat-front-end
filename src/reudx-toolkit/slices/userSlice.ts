import { Action, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
const signupUser = createAsyncThunk(
    'user/signupUser',
    async (payload:{name:string,email:string,password:string,phone:number}) => {
      const data = await useAPI<IUserData>(() => authService.signup(payload)); 
      return data;
    },
);

// login asyncthunk
const loginUser = createAsyncThunk(
    'user/loginUser',
    async (payload:{email:string,password:string}) => {
      const data = await useAPI<IUserData>(() => authService.login(payload)); 
      return data;
    },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    
  },
  extraReducers: {
    [signupUser.pending]: (state:userState) => {
      state.data= null,
        state.error= null,
       state. status="pending",
    },
    
    [signupUser.fulfilled]: (state:userState,action)=>{
      state.data=action.payload,
      state.error=null,
      state.status="success",
    },
    [signupUser.rejected]: (state:userState, action) => {
      state.data = null;
      state.error = action.payload,
      state. status="error",
    },
 
  }
});


export default userSlice.reducer;