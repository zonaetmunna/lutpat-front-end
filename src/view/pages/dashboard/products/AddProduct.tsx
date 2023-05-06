import React from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../../../types";
import { useAddProductMutation } from "../../../../features/product/productApi";

type FormValues = {
  name: string;
  image: "string";
  description: string;
  category: string;
  price: string;
  store: string;
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [postData, { isError, isLoading }] = useAddProductMutation();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    postData(data);
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-medium mb-5">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.name && <p className="text-red-500 mt-2">Name is required</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            image
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.name && <p className="text-red-500 mt-2">Name is required</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.description && (
            <p className="text-red-500 mt-2">Description is required</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-2"
          >
            category
          </label>
          <input
            type="text"
            id="name"
            {...register("category", { required: true })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.category && (
            <p className="text-red-500 mt-2">category is required</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true, min: 0 })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.price && (
            <p className="text-red-500 mt-2">
              Price is required and must be greater than 0
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="store"
            className="block text-gray-700 font-medium mb-2"
          >
            Store
          </label>
          <input
            type="text"
            id="store"
            {...register("store", { required: true })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.store && (
            <p className="text-red-500 mt-2">
              store is required and must be greater than 0
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
