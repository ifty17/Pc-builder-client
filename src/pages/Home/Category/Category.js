import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryOptions from './CategoryOptions';

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data =>setCategories(data));
    },[])

    return (
      <div className="py-5">
        <div className="text-center pb-5">
          <h3 className="text-2xl font-bold">Featured Category</h3>
          <p>Get Your Desired Product from Featured Category!</p>
        </div>
        <Link
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-5"
        >
          {categories.map((category) => (
            <CategoryOptions
              key={category.category_id}
              category={category}
            ></CategoryOptions>
          ))}
        </Link>
      </div>
    );
};

export default Category;