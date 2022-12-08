import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const DashboardNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.error(error));
    };

    const navItems = (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>

        <li>
          {user?.uid ? (
            <>
              <Link to="/dashboard">Dashboard</Link>

              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </React.Fragment>
    );
    return (
      <div>
        <div className="navbar bg-base-100 flex justify-between">
          <div className="navbar-start">
           
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              PC Builder
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{navItems}</ul>
          </div>
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    );
};

export default DashboardNav;