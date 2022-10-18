import React from 'react';
import { useParams } from 'react-router-dom';
import useAPI from '../../../hooks/useApi';
import productService from '../../../services/product.service';

const SingleProduct = () => {
  const { _id='' } = useParams();

  const { data: product } = useAPI<IProduct>(()=>productService.getProductDetailsById(_id));

  return (
    <div>
      {
        product ? <div>
          <h3>{product._id}</h3>
          <h5>{product.name}</h5>
        </div>
        :null
      }
      
    </div>
  );
};

export default SingleProduct;