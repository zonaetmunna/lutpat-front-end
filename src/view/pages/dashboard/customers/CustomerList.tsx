import React from "react";
import { useGetUsersQuery } from "../../../../features/auth/authApi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const CustomerList = () => {
  const { data, error, isError } = useGetUsersQuery();
  const users = data?.data;
  console.log(users);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Customer List</h1>

      {isError && <p>Error fetching customer list</p>}

      {users && users.length === 0 && <p>No customers found</p>}

      {users && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Phone</th>
                <th className="py-2">Role</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="bg-white">
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">{user.phone}</td>
                  <td className="py-2">{user.role}</td>
                  <td className="py-2">{user.status}</td>
                  <td className="py-2">
                    <button className="mr-2">
                      <AiFillEdit />
                    </button>
                    <button>
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerList;
