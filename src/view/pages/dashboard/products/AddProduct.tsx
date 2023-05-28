import React from "react";
import { useAddProductMutation } from "../../../../features/product/productApi";
import { useGetStoreQuery } from "../../../../features/store/storeApi";
import { useForm } from "react-hook-form";
import { IProduct } from "../../../../types";
import toast from "react-hot-toast";
import { useGetCategoriesQuery } from "../../../../features/category/categoryApi";

const AddProduct = () => {
  const [addProduct, { error, isError, isLoading }] = useAddProductMutation();
  const { data: categoryData } = useGetCategoriesQuery({});
  const categories = categoryData?.data;
  const { data: storeData } = useGetStoreQuery({});
  const stores = storeData?.data;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();

  const onSubmit = async (data: IProduct) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);

      // Append single image to the FormData
      if (data.image) {
        formData.append("image", data.image[0]);
      }

      // Check if anotherImage is an array
      if (Array.isArray(data.anotherImage)) {
        data.anotherImage.forEach((image) => {
          formData.append("anotherImage", image);
        });
      }

      formData.append("price", data.price.toString());
      formData.append("category", data.category);
      formData.append("store", data.store);
      console.log(formData);

      await addProduct(formData);

      // Show success toast

      toast.success("Product added successfully");

      // Reset form
      reset();
    } catch (error) {
      // Show error toast
      console.log(error);
      toast.error("Error adding product");
    }
  };
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-8">Add Product</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder="Enter product name"
              />
              {errors.name && (
                <span className="text-red-500">Product name is required</span>
              )}
            </div>
            <div>
              <label htmlFor="description" className="text-lg font-semibold">
                Description
              </label>
              <textarea
                id="description"
                {...register("description", { required: true })}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder="Enter product description"
              ></textarea>
              {errors.description && (
                <span className="text-red-500">
                  Product description is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="image" className="text-lg font-semibold">
                Image
              </label>
              <input
                type="file"
                id="image"
                {...register("image", { required: true })}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              />
              {errors.image && (
                <span className="text-red-500">Image is required</span>
              )}
            </div>
            <div>
              <label htmlFor="anotherImage" className="text-lg font-semibold">
                Another Image
              </label>
              <input
                type="file"
                id="anotherImage"
                {...register("anotherImage")}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                multiple // Enable multiple file selection
              />
            </div>
            <div>
              <label htmlFor="price" className="text-lg font-semibold">
                Price
              </label>
              <input
                type="number"
                id="price"
                {...register("price", { required: true, min: 0 })}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder="Enter product price"
              />
              {errors.price && (
                <span className="text-red-500">
                  Product price is required and must be a positive number
                </span>
              )}
            </div>
            <div>
              <label htmlFor="category" className="text-lg font-semibold">
                Category
              </label>
              <select
                id="category"
                {...register("category", { required: true })}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select category</option>
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="text-red-500">Category is required</span>
              )}
            </div>
            <div>
              <label htmlFor="store" className="text-lg font-semibold">
                Store
              </label>
              <select
                id="store"
                {...register("store", { required: true })}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select store</option>
                {stores?.map((store) => (
                  <option key={store._id} value={store._id}>
                    {store.name}
                  </option>
                ))}
              </select>
              {errors.store && (
                <span className="text-red-500">Store is required</span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
