import React from "react";
import { useForm } from "react-hook-form";
import { Store } from "../../../../types";

interface AddShopModalProps {
  onClose: () => void;
  onAddShop: (data: Store) => void;
}

const AddStoreModal = ({ onClose, onAddShop }: AddShopModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Store>();

  const onSubmit = (data: Store) => {
    onAddShop(data);
    onClose();
  };
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Add Store
              </h3>
              <div className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    {...register("location", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.location ? "border-red-500" : ""
                    }`}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-xs italic">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    {...register("description", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.description ? "border-red-500" : ""
                    }`}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs italic">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    {...register("phone", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs italic">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    {...register("image", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.image ? "border-red-500" : ""
                    }`}
                  />
                  {errors.image && (
                    <p className="text-red-500 text-xs italic">
                      {errors.image.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="website"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    {...register("website", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.website ? "border-red-500" : ""
                    }`}
                  />
                  {errors.website && (
                    <p className="text-red-500 text-xs italic">
                      {errors.website.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="socialMedia"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Social Media
                  </label>
                  <input
                    type="text"
                    {...register("socialMedia", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.socialMedia ? "border-red-500" : ""
                    }`}
                  />
                  {errors.socialMedia && (
                    <p className="text-red-500 text-xs italic">
                      {errors.socialMedia.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="status"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    {...register("status", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.status ? "border-red-500" : ""
                    }`}
                  />
                  {errors.status && (
                    <p className="text-red-500 text-xs italic">
                      {errors.status.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="user._id"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    User ID
                  </label>
                  <input
                    type="text"
                    {...register("owner", {
                      required: "This field is required",
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.owner ? "border-red-500" : ""
                    }`}
                  />
                  {errors.owner && (
                    <p className="text-red-500 text-xs italic">
                      {errors.owner.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStoreModal;
