import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Navbar from "../pages/Home/Navbar/Navbar";
import DashboardNav from "./DashboardNav";

const DashboardLayout = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.error(error));
    };


    // console.log(isSeller.isSeller);
  return (
    <div>
      <DashboardNav></DashboardNav>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li className="lg:hidden">
              <Link to="/">Home</Link>
            </li>
            <li className="lg:hidden">
              <Link to="/products">All Products</Link>
            </li>
            <li className="lg:hidden">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard Home</Link>
            </li>

            {isBuyer.isBuyer && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}

            {isSeller.isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reporteditems">Reported Items</Link>
                </li>
              </>
            )}
            <li className="lg:hidden">
              {user?.uid ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>

                  <button onClick={handleLogOut}>Logout</button>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
