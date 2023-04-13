import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppThunk, RootState } from "../../../app/store";
import { SignUpData } from "../../../types";
import { signupUser } from "../../../features/auth/authSlice";
import { AppDispatch } from "../../../app/store";

// interface
/* interface IFormInput {
  name: String;
  email: String;
  password: String;
  phone: Number;
} */

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<SignUpData>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isLoading, error, isError } = useSelector(
    (state: RootState) => state.auth
  );
  console.log(user);

  const onSubmit = (data: SignUpData) => {
    console.log(data);
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };
    dispatch(signupUser());
    if (data) {
      navigate("/");
    }
    reset();
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-md p-5 mx-auto rounded-sm shadow-md my-14 bg-slate-100">
        <form
          className="flex flex-col w-full gap-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="name"
            className="border-none"
            {...register("name")}
          />
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
            type="number"
            placeholder="phone"
            className="border-none"
            {...register("phone")}
          />
          <input
            className="p-3 text-white bg-slate-500 hover:bg-slate-600"
            type="submit"
          />
        </form>
      </div>
      <div className="text-center">
        <Link to="/login" className="text-center text-amber-400">
          Already have account! please login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
