import React, { useEffect, useState } from "react";

type Shop = {
  id: number;
  name: string;
  address: string;
  location: string;
  category: string;
  status: string;
};

const SingleShop = ({ shop }: { shop: Shop }) => {
  /*   const { id } = useParams();
  const [shop, setShop] = useState(null);

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const response = await axios.get(`/api/shops/${id}`);
        setShop(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShop();
  }, [id]);

  if (!shop) {
    return <div>Loading...</div>;
  } */

  return (
    <div>
      <h1>{shop.name}</h1>
      <p>{shop.address}</p>
      <p>{shop.location}</p>
      <p>{shop.category}</p>
      <p>{shop.status}</p>
    </div>
  );
};

export default SingleShop;
