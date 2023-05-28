import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_5rksu6c",
        "template_tu8zs26",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "aYOOXD_8uOMp0buQd"
      );

      // Display success toast
      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);

      // Display error toast
      toast.error("Error sending email");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-center text-2xl mb-4 font-semibold text-gray-800">
            Contact Us
          </h2>
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
              placeholder="Your name"
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
              placeholder="Your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">Email is required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.message && "border-red-500"
              }`}
              id="message"
              placeholder="Your message"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs italic">Message is required</p>
            )}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
