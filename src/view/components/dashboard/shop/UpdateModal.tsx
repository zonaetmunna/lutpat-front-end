import React, { useState } from "react";

type UpdateModalProps = {
  shop: {
    id: number;
    name: string;
    address: string;
    location: string;
    category: string;
    status: string;
  } | null;
  onSubmit: (updatedShop: {
    id: number;
    name: string;
    address: string;
    location: string;
    category: string;
    status: string;
  }) => void;
  onClose: () => void;
};

const UpdateModal = ({ shop, onSubmit, onClose }: UpdateModalProps) => {
  const [updatedShop, setUpdatedShop] = useState(shop);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // setUpdatedShop({ ...updatedShop, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubmit(updatedShop);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-4">Update Shop</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-gray-300 rounded-lg w-full py-2 px-3"
              //   value={updatedShop.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              Address
            </label>
            <input
              id="address"
              className="border-gray-300 rounded-lg w-full py-2 px-3 resize-none"
              //   value={updatedShop.address}s
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-medium mb-2"
            >
              Location
            </label>
            <select
              id="location"
              className="border-gray-300 rounded-lg w-full py-2 px-3"
              //   value={updatedShop.location}
              //   onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Miami">Miami</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            <select
              id="category"
              className="border-gray-300 rounded-lg w-full py-2 px-3"
              //   value={updatedShop.category}
              //   onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Restaurant">Restaurant</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-700 font-medium mb-2"
            >
              Status
            </label>
            <select
              id="status"
              //   value={updatedShop.status}
              //   onChange={handleChange}
              className="border-gray-300 rounded-lg w-full py-2 px-3"
              required
            >
              <option value="">Select Status</option>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
          <button type="submit">Update Shop</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
