import React from 'react';

const Product = ({ component }) => {

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
    } = component;

  return (
    <div className="card card-compact w-96 border bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Selling price: ${resale_price}</p>
        <p>Original price: ${original_price}</p>
        <p>Years of user: {years_used} years</p>
        <p>Sell post date: {post_time}</p>
        <p>Seller Name: {seller_name}</p>
        <p> {details}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;