import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ product }: { product: IProduct }) => {
  // product destructuring
  const { name, description, _id } = product;

  const navigate = useNavigate();

  const goDetails = () => {
    navigate(`/details${_id}`);
  }

  return (
    <div className='className="p-3 rounded-sm shadow hover:shadow-xl hover:cursor-pointer" '>
      <h3>{name}</h3>
      <h4>{_id}</h4>
      <h3>{description}</h3>
      <button onClick={goDetails} className="bg-gray-500 p-2 m-1 text-center rounded-full ...">details</button>
    </div>
  );
};

export default Products;