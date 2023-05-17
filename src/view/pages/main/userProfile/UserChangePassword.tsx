import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const UserChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();

  const onSubmit = (data: ChangePasswordFormData) => {
    console.log(data);
    // Handle password change logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="oldPassword" className="block mb-2 font-medium">
            Old Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="oldPassword"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            {...register("oldPassword", { required: true })}
          />
          {errors.oldPassword && (
            <span className="text-red-500">Old Password is required</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="newPassword" className="block mb-2 font-medium">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
              {...register("newPassword", { required: true })}
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
          </div>
          {errors.newPassword && (
            <span className="text-red-500">New Password is required</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">Confirm Password is required</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserChangePassword;
