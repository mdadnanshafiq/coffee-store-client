import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      category,
      taste,
      details,
      photo,
    };
    fetch(
      `https://coffee-store-server-eta-inky.vercel.app/coffee/${coffee._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero  min-h-[80vh] bg-[#F4F3F0]">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#D2B48C]">
              Update Coffee!
            </h1>
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateCoffee} className="card-body">
              <div className="flex justify-center items-center gap-4">
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter coffee name"
                      name="name"
                      className="input w-full input-bordered"
                      defaultValue={coffee.name}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter coffee quantity"
                      name="quantity"
                      className="input input-bordered"
                      required
                      defaultValue={coffee.quantity}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter coffee category"
                      name="category"
                      className="input input-bordered"
                      required
                      defaultValue={coffee.category}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Supplier</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter coffee supplier"
                      name="supplier"
                      className="input w-full input-bordered"
                      required
                      defaultValue={coffee.supplier}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Taste</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter coffee taste"
                      name="taste"
                      className="input input-bordered"
                      required
                      defaultValue={coffee.taste}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Details</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter coffee details"
                      name="details"
                      className="input input-bordered"
                      required
                      defaultValue={coffee.details}
                    />
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                  defaultValue={coffee.photo}
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#D2B48C]">Update Coffee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
