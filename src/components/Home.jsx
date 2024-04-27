import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoEyeOutline, IoPencil } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";

const Home = () => {
  const loadedCoffee = useLoaderData();
  const [coffee, setCoffee] = useState(loadedCoffee);

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
          fetch(
            `https://coffee-store-server-eta-inky.vercel.app/coffee/${id}`,
            {
              method: "DELETE",
              // headers: {
              //   "content-type": "application/json",
              // },
              // body: JSON.stringify(),
            }
          )
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
                const remaining = coffee.filter((item) => item._id !== id);
                setCoffee(remaining);
              }
            });
        }
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {coffee.map((item, idx) => {
        return (
          <div
            key={idx}
            className="card lg:card-side bg-[#F4F3F0] flex justify-center items-center gap-4 p-6"
          >
            <figure className="size-[200px]">
              <img src={item.photo} alt="" />
            </figure>
            <div className="card-body flex justify-center items-start gap-4">
              <h2 className="card-title">
                Name: <span className="font-normal">{item.name}</span>
              </h2>
              <h2 className="card-title">
                Quantity: <span className="font-normal">{item.quantity}</span>
              </h2>
              <h2 className="card-title">
                Category: <span className="font-normal">{item.category}</span>
              </h2>
            </div>
            <div className="card-actions flex flex-col justify-center items-center">
              <button className="btn bg-amber-800 text-white font-bold">
                <IoEyeOutline />
              </button>
              <Link
                to={`/update/${item._id}`}
                className="btn bg-gray-800 text-white font-bold"
              >
                <IoPencil />
              </Link>
              <button
                onClick={() => handleDelete(`${item._id}`)}
                className="btn bg-red-800 text-white font-bold"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
