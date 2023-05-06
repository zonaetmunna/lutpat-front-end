import React from "react";
import { RootState } from "../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart.cart);
  const items = cart?.cart;

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {items.length === 0 ? (
        <p className="text-center text-xl font-bold">
          Your cart is currently empty.
        </p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items &&
              items?.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow-md rounded-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <label htmlFor={`quantity-${item._id}`}>Quantity:</label>
                      {/* <input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.valueAsNumber)
                      }
                      className="mx-2 border-gray-400 border rounded-md px-2 py-1 w-16"
                    /> */}
                      <button
                        onClick={() => handleRemoveItem(item._id as string)}
                        className="bg-red-500 text-white font-medium px-2 py-1 rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-8 flex justify-end">
            <div className="text-right">
              {/* <p className="text-lg font-bold">
                Total: ${totalAmount.toFixed(2)}
              </p> */}
              <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
