import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-5/6 mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">BookCalculator</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEcA1Tijn8m5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716225319716?e=2147483647&v=beta&t=bb7NI6a_9j40-nCI9nREESQ2kgtDkPjMZy17GQMB1-g"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
