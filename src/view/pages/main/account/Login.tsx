import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../../app/store";
import loginImage from '../../../../assets/images/mobile-login-concept-illustration_114360-135.avif';
import { loginUser } from "../../../../features/auth/authSlice";
import { LoginData } from "../../../../types";

const Login = () => {
  const { register, handleSubmit, reset } = useForm<LoginData>({
    defaultValues: {
      email: "name@gmail.com",
      password: "123456789",
    },
  });
  const { user, isLoading, error, isError } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const navigate = useNavigate();

  const handleLogin =async (data: LoginData) => {
    console.log(data);
    const logData = {
      email: data.email,
      password: data.password,
    };
    setIsSubmitting(true); // Start the submission state

    try {
      await dispatch(loginUser(logData));
      // Reset form fields on successful login
      reset();
    } catch (error) {
      // Handle login error
      toast.error("Login failed. Please try again."); // Display a toast notification or handle the error message as desired
    }

    setIsSubmitting(false); // End the submission state
  };

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  // Redirect after successful login
  useEffect(() => {
    if (!isLoading && user?.email) {
      navigate("/");
    }
  }, [isLoading, user, navigate]);



  return (
    <div className="container mx-auto">
      <div className="max-w-md p-5 mx-auto rounded-sm shadow-md my-14 bg-slate-100">
        <div className="flex justify-center">
          <img src={loginImage} alt="Login" className="w-20 h-20" />
        </div>
        <form className="flex flex-col w-full gap-y-5 mt-5" onSubmit={handleSubmit(handleLogin)}>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-slate-500"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-slate-500"
            {...register("password", { required: true })}
          />

          <input
            className={`p-3 text-white bg-slate-500 hover:bg-slate-600 rounded cursor-pointer ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            value={isSubmitting ? "Loading..." : "Login"}
            disabled={isSubmitting}
          />
        </form>
      </div>
      <div className="text-center">
        <p className="text-gray-500">Are you a new user?</p>
        <Link to="/signup" className="text-amber-400 hover:text-amber-500">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
