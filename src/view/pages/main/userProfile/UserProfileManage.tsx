import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

const UserProfileManage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [image, setImage] = useState<File | null>(null);
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [contactNumber, setContactNumber] = useState("+1 (936) 514-1641");
  const [editMode, setEditMode] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactNumber(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save logic here
    setEditMode(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>
      <div className="mb-6">
        <label htmlFor="image" className="block mb-2 font-medium">
          Upload an image or drag and drop
        </label>
        <input
          type="file"
          id="image"
          accept=".png,.jpg,.jpeg"
          className="hidden"
          onChange={handleImageUpload}
        />
        <div className="border border-dashed border-gray-400 p-4 rounded-md">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-md"
            />
          ) : (
            <div className="text-gray-500 text-center">
              <span className="block mb-2">PNG, JPG</span>
              <span>Drag and drop</span>
              <span>or</span>
              <label
                htmlFor="image"
                className="cursor-pointer text-blue-500 hover:text-blue-600"
              >
                Browse
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
          value="Customer"
          readOnly={!editMode}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="bio" className="block mb-2 font-medium">
          Bio
        </label>
        <textarea
          id="bio"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
          value={bio}
          onChange={handleBioChange}
          readOnly={!editMode}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
          value={email}
          onChange={handleEmailChange}
          readOnly={!editMode}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="contactNumber" className="block mb-2 font-medium">
          Contact Number
        </label>
        <input
          type="text"
          id="contactNumber"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
          value={contactNumber}
          onChange={handleContactNumberChange}
          readOnly={!editMode}
        />
      </div>
      <div className="flex justify-between">
        {editMode ? (
          <button
            type="button"
            className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500"
            onClick={handleSaveClick}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
        <button
          type="button"
          className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-gray-500"
        >
          Update
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Addresses</h3>
        <div className="mb-6">
          <h4 className="text-base font-bold mb-2">Billing</h4>
          <p>2231 Kidd Avenue, AK, Kipnuk, 99614, United States</p>
        </div>
        <div className="mb-6">
          <h4 className="text-base font-bold mb-2">Shipping</h4>
          <p>2148 Straford Park, KY, Winchester, 40391, United States</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileManage;
