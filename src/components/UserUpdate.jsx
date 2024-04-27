import { useLoaderData } from "react-router-dom";

const UserUpdate = () => {
  const user = useLoaderData();
  const handleUserUpdate = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="hero  min-h-[80vh] bg-[#F4F3F0]">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#D2B48C]">Update User!</h1>
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUserUpdate} className="card-body">
              <div className="flex justify-center items-center gap-4">
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter user name"
                      name="displayName"
                      className="input w-full input-bordered"
                      defaultValue={user.displayName}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      className="input input-bordered"
                      required
                      defaultValue={user.email}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter photoURL"
                      name="photoURL"
                      className="input input-bordered"
                      required
                      defaultValue={user.photoURL}
                    />
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#D2B48C]">Update User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
