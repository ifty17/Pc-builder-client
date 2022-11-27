import React from 'react';

const AllProduct = ({ product, setBookedProduct }) => {
  const {
    image,
    location,
    resale_price,
    original_price,
    years_used,
    post_time,
    seller_name,
    name,
    details,
    _id
  } = product;
  return (
    <div className="card card-compact my-3 md:h-[70%]  border bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{name}</h2>
          <button className="btn btn-xs btn-outline btn-primary">
            Add to wishlist
          </button>
        </div>
        <p>Selling price: ${resale_price}</p>
        <p>Original price: ${original_price}</p>
        <p>Years of user: {years_used} years</p>
        <p>Sell post date: {post_time}</p>
        <p>Seller Name: {seller_name}</p>
        <p> {details}</p>
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