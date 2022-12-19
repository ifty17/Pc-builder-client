import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useVerifySeller from "../../../Hooks/useVerifySeller";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const AllProduct = ({ product, setBookedProduct, setBookedProductLg }) => {
  const { user } = useContext(AuthContext);
  const [isSellerVerified] = useVerifySeller(user?.email);

  const {
    name,
    condition,
    image,
    resale_price,
    original_price,
    number,
    location,
    seller_name,
    purchaseYear,
    details,
    years_used,
    post_time,
  } = product;

  const handleReportedItems = (product) => {
    fetch("https://y-eta-one.vercel.app/reporteditems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product reported to admin");
          console.log(data);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div className="card card-compact my-3   border bg-base-100 shadow-xl lg:hidden">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{name}</h2>

            <button
              onClick={() => handleReportedItems(product)}
              className="btn btn-xs btn-outline"
            >
              report
            </button>
          </div>
          <p>Selling price: ${resale_price}</p>
          <p>Original price: ${original_price}</p>
          <p>Condition: {condition}</p>
          <p>Seller contact number: {number}</p>
          <p>Years of user: {years_used} years</p>
          <p>Sell post date: {post_time}</p>
          <p>
            Seller Name: {seller_name}
            {isSellerVerified && (
              <span>
                <FaCheckCircle />
              </span>
            )}
          </p>
          <p>Location: {location}</p>
          <p>Purchase Year: {purchaseYear}</p>
          <p> Details: {details}</p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setBookedProduct(product)}
              className="btn btn-outline btn-primary w-full"
              htmlFor="booking-modal"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>


      <div className="card card-compact my-3 h-full border bg-base-100 shadow-xl hidden lg:block">
        <figure>
          <img className="w-[50%]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body h-[70%] ">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{name}</h2>

            <button
              onClick={() => handleReportedItems(product)}
              className="btn btn-xs btn-outline"
            >
              report
            </button>
          </div>
          <p>Selling price: ${resale_price}</p>
          <p>Original price: ${original_price}</p>
          <p>Condition: {condition}</p>
          <p>Seller contact number: {number}</p>
          <p>Years of user: {years_used} years</p>
          <p>Sell post date: {post_time}</p>
          <p>
            Seller Name: {seller_name}
            {isSellerVerified && (
              <span>
                <FaCheckCircle />
              </span>
            )}
          </p>
          <p>Location: {location}</p>
          <p>Purchase Year: {purchaseYear}</p>
          <p> Details: {details}</p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setBookedProductLg(product)}
              className="btn btn-outline btn-primary w-full"
              htmlFor="booking-modalLg"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
