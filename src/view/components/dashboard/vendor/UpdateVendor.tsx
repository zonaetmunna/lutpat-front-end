import React from "react";
import { ISellerData } from "../../../../types";
interface UpdateSellerProps {
  onClose: () => void;
  onUpdateSeller: ({
    sellerId,
    seller,
  }: {
    sellerId: string;
    seller: ISellerData;
  }) => void;
  seller: ISellerData;
}
const UpdateVendor = ({
  seller,
  onClose,
  onUpdateSeller,
}: UpdateSellerProps) => {
  return <div></div>;
};

export default UpdateVendor;
