import React from "react";

const AdvProduct = ({ products, setBookedProduct }) => {
  const {
    condition,
    details,
    email,
    image,
    location,
    name,
    number,
    original_price,
    post_time,
    purchaseYear,
    resale_price,
    seller_name,
    status,
    years_used,
  } = products;

  return (
    
      <div
        className="card card-compact my-3   border bg-base-100 shadow-xl"
      >
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{name}</h2>

            <button className="btn btn-xs btn-outline">Report</button>
          </div>
          <p>Selling price: ${resale_price}</p>
          <p>Original price: ${original_price}</p>
          <p>Condition: {condition}</p>
          <p>Seller contact number: {number}</p>
          <p>Years of user: {years_used} years</p>
          <p>Sell post date: {post_time}</p>
          <p>Seller Name: {seller_name}</p>
          <p>Location: {location}</p>
          <p>Purchase Year: {purchaseYear}</p>
          <p> Details: {details}</p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setBookedProduct(products)}
              className="btn btn-outline btn-primary w-full"
              htmlFor="adv-modal"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
  );
};

export default AdvProduct;
