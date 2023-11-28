import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { AppDispatch, RootState } from "../../../../app/store";
import signupImage from "../../../../assets/images/mobile-login-concept-illustration_114360-135.avif";
import { signupUser } from "../../../../features/auth/authSlice";
import { SignUpData } from "../../../../types";

const SignUp = () => {
  const { register, handleSubmit, reset,formState: { errors } } = useForm<SignUpData>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isLoading, error, isError } = useSelector(
    (state: RootState) => state.auth
  );
  console.log(user);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: SignUpData) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      };
      console.log(userData);
      setIsSubmitting(true);
      await dispatch(signupUser(userData));
      toast.success("Sign up successful!"); // Display success toast notification
      setIsSubmitting(false);
      reset(); // Reset form fields on successful signup
    } catch (error) {
      toast.error("Sign up failed. Please try again."); // Display error toast notification
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (!isLoading && user?.email) {
      navigate("/");
    }
  }, [isLoading, user, navigate]);

  return (
    <div className="container mx-auto">
      <div className="max-w-md p-5 mx-auto rounded-sm shadow-md my-14 bg-slate-100">
    <div className="flex justify-center mb-5">
      <img src={signupImage} alt="Signup" className="w-40 h-40" />
    </div>
    <form className="flex flex-col w-full gap-y-5" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        className={`p-3 bg-gray-100 rounded border ${
          errors.name ? "border-red-500" : ""
        }`}
        {...register("name", { required: true })}
      />
      {errors.name && <span className="text-red-500">Name is required</span>}
      <input
        type="email"
        placeholder="Email"
        className={`p-3 bg-gray-100 rounded border ${
          errors.email ? "border-red-500" : ""
        }`}
        {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">Email is required</span>}
      <input
        type="password"
        placeholder="Password"
        className={`p-3 bg-gray-100 rounded border ${
          errors.password ? "border-red-500" : ""
        }`}
        {...register("password", { required: true })}
      />
      {errors.password && <span className="text-red-500">Password is required</span>}
      <input
        type="number"
        placeholder="Phone"
        className={`p-3 bg-gray-100 rounded border ${
          errors.phone ? "border-red-500" : ""
        }`}
        {...register("phone", { required: true })}
      />
      {errors.phone && <span className="text-red-500">Phone is required</span>}
      <input
        className={`p-3 text-white bg-slate-500 hover:bg-slate-600 rounded cursor-pointer ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="submit"
        value={isSubmitting ? "Signing Up..." : "Sign Up"}
        disabled={isSubmitting}
      />
    </form>
  </div>
  <div className="text-center">
    <p className="text-gray-500">Already have an account?</p>
    <Link to="/login" className="text-amber-400 hover:text-amber-500">
      Login
    </Link>
  </div>
</div>


  );
};

export default SignUp;
