import React from 'react';

const Product = ({ component, setBookingProduct }) => {

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
    } = component;

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
            onClick={() => setBookingProduct(component)}
            className="btn btn-outline btn-primary w-full"
            htmlFor="modal-booking"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;