import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import image from "../../../../assets/images/seller-registration-image.avif";
import { useCreateSellerMutation } from "../../../../features/auth/authApi";

type FormData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  profileImage?: string;
};

const SellerRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [createSeller,{isError,isLoading,error,isSuccess}]=useCreateSellerMutation();

  const onSubmit = async (data: FormData) => {
    const sellerPostData={
      name:data.name,
      email:data.email,
      password:data.password,
      phone:data.phone,
      role:"seller"
    }
    try {
      console.log(sellerPostData);
    createSeller(sellerPostData);
    toast.success("Sign up successful!");
    reset();
    } catch (error) {
      toast.error("Sign up failed. Please try again.");
      
    }
     
  };

  useEffect(() => {
    if (isError) {
      toast.error("error");
    }
  }, [isError, error]);
  useEffect(() => {
    if (isSuccess) {
      toast.error("successfully");
    }
  }, [isSuccess]);

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-4 gap-4 p-10">
        {/* Image and heading */}
        <div className="col-span-2 flex items-center justify-center">
          <div className="w-1/1 bg-white shadow-md rounded px-8 py-4 mb-4 mr-2">
            <h2 className="text-center text-2xl mb-4 font-bold text-gray-800">
              Seller Registration
            </h2>
            <img src={image} alt="Flex" className="w-full h-auto" />
          </div>
        </div>
        {/* Form */}
        <div className="col-span-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-1/1 bg-white shadow-md rounded px-8 py-4 mb-4 ml-2"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name && "border-red-500"
                }`}
                id="name"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">Name is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email && "border-red-500"
                }`}
                id="email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">Email is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password && "border-red-500"
                }`}
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  Password is required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.phone && "border-red-500"
                }`}
                id="phone"
                type="tel"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs italic">Phone is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <select
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.role && "border-red-500"
                }`}
                id="role"
                {...register("role", { required: true })}
              >
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs italic">Role is required</p>
              )}
            </div>
            
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="profileImage"
              >
                Profile Image
              </label>
              <input
                type="text"
                accept="image/*"
                id="profileImage"
                {...register("profileImage")}
              />
              {errors.profileImage && (
                <p className="text-red-500 text-xs italic">
                  Profile image is required
                </p>
              )}
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isSuccess ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSuccess}
              >
                {isSuccess ? "Registered" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistration;
