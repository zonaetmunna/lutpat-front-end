import React, { useState } from "react";
import { IProduct } from "../../../types";
import Select, { ValueType } from "react-select";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

interface FilterSidebarProps {
  filter: {
    category: string;
    priceRange: { min: number; max: number };
  };
  products: IProduct[];
  onFilterChange: (newFilter: {
    category?: string;
    priceRange?: { min?: number; max?: number };
  }) => void;
}

const FilterSidebar = ({
  filter,
  products,
  onFilterChange,
}: FilterSidebarProps) => {
  const categoryOptions = [
    { label: "All Categories", value: "" },
    { label: "Electronics", value: "electronics" },
    { label: "Home", value: "home" },
    { label: "Clothing", value: "clothing" },
    { label: "Books", value: "books" },
  ];

  const handleCategoryChange = (selectedOption: ValueType) => {
    onFilterChange({ category: selectedOption.value });
  };

  const handlePriceChange = (values: [number, number]) => {
    onFilterChange({ priceRange: { min: values[0], max: values[1] } });
  };

  const maxPrice = Math.max(...products?.map((product) => product.price), 0);

  return (
    <div
      className="border rounded-md shadow-sm p-4 bg-white "
      style={{ height: "400px" }}
    >
      <h2 className="text-lg font-medium mb-4">Filter By</h2>
      <div className="mb-4">
        <label htmlFor="category" className="block font-medium mb-2">
          Category
        </label>
        <Select
          id="category"
          options={categoryOptions}
          value={
            categoryOptions.find(
              (option) => option.value === filter.category
            ) || categoryOptions[0]
          }
          onChange={handleCategoryChange}
          isSearchable={false}
        />
      </div>
      <div>
        <label htmlFor="price" className="block font-medium mb-2">
          Price Range
        </label>
        <Range
          id="price"
          min={0}
          max={maxPrice}
          value={[filter.priceRange.min, filter.priceRange.max]}
          onChange={handlePriceChange}
          allowCross={false}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>${filter.priceRange.min}</span>
          <span>${filter.priceRange.max}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
