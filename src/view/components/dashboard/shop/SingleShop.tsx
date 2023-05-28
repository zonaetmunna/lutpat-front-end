import React from "react";
import { Store } from "../../../../types";
interface Props {
  onClose: () => void;
  shop: Store | null;
}
const SingleShop = ({ onClose, shop }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold mb-4">{shop?.name}</h2>
          <div className="mb-4">
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Email:</span> {shop?.email}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Description:</span>{" "}
              {shop?.description}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Social Media:</span>{" "}
              {shop?.socialMedia}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Phone:</span> {shop?.phone}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Website:</span> {shop?.website}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Owner:</span> {shop?.owner}
            </p>

            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Location:</span> {shop?.location}
            </p>
          </div>
          <button
            className="block w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
