import React from "react";
import { useGetProductsQuery } from "../../../../features/product/productApi";

const AllProduct = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  console.log(data);
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Image</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-2 border">{product._id}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.price}</td>
                <td className="px-4 py-2 border">{product.description}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
