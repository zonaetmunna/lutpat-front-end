import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}
function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <HiOutlineMinus className="text-gray-600 w-6 h-6" />
        ) : (
          <HiOutlinePlus className="text-gray-600 w-6 h-6" />
        )}
      </button>
      {isOpen && (
        <div className="bg-white p-4 rounded-md shadow-md mt-2">{children}</div>
      )}
    </div>
  );
}

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="prose lg:prose-xl">
          <h1>Privacy Policy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Collapsible title="Information We Collect">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>Personal Information</li>
              <li>Device Information</li>
              <li>Log Information</li>
            </ul>
          </Collapsible>
          <Collapsible title="How We Use Your Information">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Collapsible>
          <Collapsible title="Sharing Your Information">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Collapsible>
          <Collapsible title="Your Choices">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Collapsible>
          <Collapsible title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@example.com.
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
