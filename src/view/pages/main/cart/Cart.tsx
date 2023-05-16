import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { MdRemoveCircleOutline } from "react-icons/md";
import {
  applyDiscountCode,
  removeFromCart,
  setDiscountCode,
  setTotal,
  updateQuantity,
} from "../../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../../types";
import ShippingOption from "../../../components/main/ShippingOption/ShippingOption";

const Cart = () => {
  const { cart, subtotal, discountCode, total, shippingOption, shippingCost } =
    useSelector((state: RootState) => state.cart);
  console.log(cart.length);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // remove product from cart
  const handleRemoveProductCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleApplyDiscount = () => {
    const couponInput = document.getElementById(
      "coupon"
    ) as HTMLInputElement | null;
    const discountCode = couponInput?.value;

    if (discountCode) {
      dispatch(applyDiscountCode(discountCode));
    }
  };

  useEffect(() => {
    dispatch(setTotal());
  }, [subtotal, shippingCost, discountCode, dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length > 0 ? (
        <>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="text-left font-normal py-2 w-2/5">Item</th>
                <th className="text-left font-normal py-2">Price</th>
                <th className="text-left font-normal py-2">Quantity</th>
                <th className="text-left font-normal py-2">Total</th>
                <th className="text-left font-normal py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: IProduct) => (
                <tr key={item._id} className="border-b border-gray-400">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 object-cover rounded"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="ml-4">
                        <h2 className="font-bold text-lg">{item.name}</h2>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <input
                      type="number"
                      className="w-16 border border-gray-400 rounded py-1 px-2"
                      value={item.quantity}
                      onChange={(e) => {
                        const itemId = item?._id;
                        if (itemId) {
                          handleUpdateQuantity(
                            itemId,
                            parseInt(e.target.value, 10)
                          );
                        }
                      }}
                      min={1}
                      max={10}
                    />
                  </td>
                  <td className="py-4">
                    $
                    {item &&
                      item.price &&
                      item.quantity &&
                      `$${item.price * item.quantity}`}
                  </td>
                  <td className="py-4">
                    <button
                      className="hover text-red-600"
                      onClick={() =>
                        item && item._id && handleRemoveProductCart(item._id)
                      }
                    >
                      <MdRemoveCircleOutline className="h-6 w-6 fill-current" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-8">
            <div className="flex items-center">
              <span className="text-lg font-bold">Subtotal:</span>
              <span className="text-lg font-bold ml-2">${subtotal}</span>
            </div>
            <div className="flex-shrink-0 bg-gray-100 p-5">
              <ShippingOption shippingCost={shippingCost} />
              <div className="flex flex-row justify-between items-center w-full my-4">
                <label htmlFor="coupon" className="font-bold mr-2">
                  Coupon Code:
                </label>
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  className="border rounded py-2 px-3"
                  value={discountCode}
                  onChange={(e) => dispatch(setDiscountCode(e.target.value))}
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-2"
                  onClick={handleApplyDiscount}
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between items-center my-5">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">${total}</span>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 my-5 rounded hover:bg-blue-600"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-lg">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
