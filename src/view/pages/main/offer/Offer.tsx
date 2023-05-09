import React, { useState } from "react";

interface Product {
  name: string;
  percentage: number;
}
const Offer = () => {
  const [isCopied, setIsCopied] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const products: Product[] = [
    { name: "Product A", percentage: 15 },
    { name: "Product B", percentage: 20 },
    { name: "Product C", percentage: 10 },
    { name: "Product D", percentage: 25 },
  ];

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(`OFFER${index}`);
    setIsCopied((prev) => prev.map((val, i) => (i === index ? true : val)));
    setTimeout(
      () =>
        setIsCopied((prev) =>
          prev.map((val, i) => (i === index ? false : val))
        ),
      3000
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Offers</h1>
        {products.map((product: Product, index: number) => (
          <div key={index} className="flex flex-col md:flex-row">
            <p className="flex-grow text-gray-600">
              {product.name}: Get {product.percentage}% off your first purchase
              with offer code{" "}
              <span className="text-blue-600">OFFER{index}</span>!
            </p>
            <button
              className="bg-blue-600 text-white font-medium rounded-md p-4 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
              onClick={() => handleCopy(index)}
            >
              {isCopied[index] ? "Copied!" : "Copy Offer Code"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
