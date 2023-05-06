import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../features/auth/authSlice";
import { LoginData } from "../../../types";
import { AppDispatch } from "../../../app/store";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (data: LoginData) => {
    console.log(data);
    const logData = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginUser(logData));
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-md p-5 mx-auto rounded-sm shadow-md my-14 bg-slate-100">
        <form
          className="flex flex-col w-full gap-y-5"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            type="email"
            placeholder="email"
            className="border-none"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="password"
            className="border-none"
            {...register("password")}
          />

          <input
            className="p-3 text-white bg-slate-500 hover:bg-slate-600"
            type="submit"
          />
        </form>
      </div>
      <div className="text-center">
        <Link to="/signup" className="text-center text-amber-400">
          Are you new user? please Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
