import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (id) => {
    if (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        background: "	#faf7ff",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffee-store-server-eta-inky.vercel.app/user/${id}`, {
            method: "DELETE",
            // headers: {
            //   "content-type": "application/json",
            // },
            // body: JSON.stringify(),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log(data);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your coffee has been deleted.",
                  icon: "success",
                  background: "	#faf7ff",
                });
                const remaining = users.filter((item) => item._id !== id);
                setUsers(remaining);
              }
            });
        }
      });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Last Log</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {users.map((user, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.lastLog}</td>
                  <td className="flex justify-start gap-6 items-center">
                    <Link
                      to={`/user/${user._id}`}
                      className="btn bg-green-800 text-white font-bold"
                    >
                      <IoPencil />
                    </Link>
                    <button
                      onClick={() => handleDelete(`${user._id}`)}
                      className="btn bg-red-800 text-white font-bold"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
