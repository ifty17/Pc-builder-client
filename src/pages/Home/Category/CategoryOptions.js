import React from 'react';
import { Link } from 'react-router-dom';

const CategoryOptions = ({category}) => {
    const {image} = category;
    return (
      <Link to={`/products/${category.category_id}`}>
        <div className="card bg-base-100 shadow-2xl h-full border" >
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        </div>
      </Link>
    );
};

export default CategoryOptions;