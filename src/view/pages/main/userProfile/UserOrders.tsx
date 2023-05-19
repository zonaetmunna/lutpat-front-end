import React from "react";
import { useGetOrderUserQuery } from "../../../../features/order/orderApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

const UserOrders = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const userId = user?._id ?? "";
  const { data } = useGetOrderUserQuery(userId);
  const orderData = data?.data;
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orderData?.length ?? 0 > 0 ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Total Amount</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Payment Method</th>
              <th className="py-2 px-4 border-b">Transaction ID</th>
              <th className="py-2 px-4 border-b">Products</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border-b">{order._id}</td>
                <td className="py-2 px-4 border-b">{order.totalAmount}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
                <td className="py-2 px-4 border-b">
                  {order.paymentInfo.method}
                </td>
                <td className="py-2 px-4 border-b">
                  {order.paymentInfo.stripePayment.transactionId}
                </td>
                <td className="py-2 px-4 border-b">
                  <ul>
                    {order.products.map((product) => (
                      <li key={product.productId}>
                        {product.productId} - Quantity: {product.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default UserOrders;
