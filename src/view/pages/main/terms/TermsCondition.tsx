import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const TermsCondition = () => {
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const toggleSection1 = () => {
    setSection1(!section1);
  };

  const toggleSection2 = () => {
    setSection2(!section2);
  };

  const toggleSection3 = () => {
    setSection3(!section3);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <div className="border-t border-b border-gray-300 py-4 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleSection1}
        >
          <h2 className="text-lg font-medium">Section 1</h2>
          {section1 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {section1 && (
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              venenatis sagittis urna, sit amet gravida massa aliquet in. Duis
              fermentum velit vel mauris hendrerit mollis. Aenean a sapien
              pharetra, tincidunt elit ac, lobortis urna. Praesent a odio non
              risus sodales vulputate. Curabitur nec enim sapien. Donec ut enim
              quis lorem bibendum pulvinar. In ultrices est et ligula maximus,
              ac tincidunt metus bibendum. Praesent interdum mi sit amet velit
              cursus iaculis. Donec rutrum tellus vitae enim feugiat, quis
              malesuada mi tincidunt. Fusce hendrerit nulla vitae velit
              hendrerit, sit amet euismod enim lobortis. Vivamus finibus justo
              id ante scelerisque, at hendrerit nibh egestas. Curabitur non
              sodales turpis. Nam molestie lacinia facilisis.
            </p>
          </div>
        )}
      </div>
      <div className="border-t border-b border-gray-300 py-4 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleSection2}
        >
          <h2 className="text-lg font-medium">Section 2</h2>
          {section2 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {section2 && (
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              venenatis sagittis urna, sit amet gravida massa aliquet in. Duis
              fermentum velit vel mauris hendrerit mollis. Aenean a sapien
              pharetra, tincidunt elit ac, lobortis urna. Praesent a odio non
              risus sodales vulputate. Curabitur nec enim sapien. Donec ut enim
              quis lorem bibendum pulvinar. In ultrices;
            </p>
          </div>
        )}
      </div>
      <div className="border-t border-b border-gray-300 py-4 mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleSection3}
        >
          <h2 className="text-lg font-medium">Section 3</h2>
          {section3 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {section2 && (
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              venenatis sagittis urna, sit amet gravida massa aliquet in. Duis
              fermentum velit vel mauris hendrerit mollis. Aenean a sapien
              pharetra, tincidunt elit ac, lobortis urna. Praesent a odio non
              risus sodales vulputate. Curabitur nec enim sapien. Donec ut enim
              quis lorem bibendum pulvinar. In ultrices;
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsCondition;
