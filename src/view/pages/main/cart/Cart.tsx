import React from "react";
import { RootState } from "../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { MdRemoveCircleOutline } from "react-icons/md";
import { removeItem } from "../../../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const subtotal = cart.reduce((acc, curr) => acc + curr.price, 0);

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
              {cart.map((item) => (
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
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <input
                      type="number"
                      className="w-16 border border-gray-400 rounded py-1 px-2"
                      value={item.quantity}
                      onChange={() => {}}
                      min={1}
                      max={10}
                    />
                  </td>
                  <td className="py-4">${item.price * item.quantity}</td>
                  <td className="py-4">
                    <button
                      className="hover:text-red-600"
                      onClick={() => handleRemoveItem(item._id ?? "")}
                    >
                      <MdRemoveCircleOutline className="h-6 w-6 fill-current" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-8">
            <div className="flex items-center">
              <span className="text-lg font-bold">Subtotal:</span>
              <span className="text-lg font-bold ml-2">${subtotal}</span>
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
