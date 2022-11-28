import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useVerifySeller from "../../../Hooks/useVerifySeller";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const AllProduct = ({ product, setBookedProduct }) => {

  const {user} = useContext(AuthContext);
  const [isSellerVerified] = useVerifySeller(user?.email);
  // console.log(isSellerVerified);

  const {
    name,
    category_id,
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

  const handleReportedItems = (product) =>{

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

  }

  return (
    <div
      data-aos="zoom-in"
      className="card card-compact my-3   border bg-base-100 shadow-xl"
    >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{name}</h2>

          <button onClick={() => handleReportedItems(product)} className="btn btn-xs btn-outline">report</button>
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
  );
};

export default AllProduct;
