import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";

const AddProduct = () => {
    const navigate = useNavigate();
  const { loading, setLoading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.productName?.value;
    const category_id = form?.category?.value;
    const condition = form?.condition?.value;
    const image = form?.image?.files[0];
    const resale_price = form?.price?.value;
    const original_price = form?.original_price?.value;
    const number = form?.mobileNumber?.value;
    const location = form?.location?.value;
    const purchaseYear = form?.purchaseYear?.value;
    const details = form?.description?.value;
    const years_used = form?.years_used?.value;
    const post_time = form?.post_time?.value;

    // console.log(name, category_id, condition, image, price, mobileNumber, location, purchaseYear, details);

    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=81c077d88a2ff4a629a342194065431e";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);

        const productInfo = {
          name,
          category_id,
          condition,
          image: data?.data?.display_url,
          resale_price,
          original_price,
          number,
          location,
          seller_name: user?.displayName,
          email: user?.email,
          purchaseYear,
          details,
          years_used,
          post_time,
          status: 'available'
        };
        console.log(productInfo);

        fetch("https://y-eta-one.vercel.app/products/add", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Product added successfully");
            setLoading(false);
            navigate('/dashboard/myproducts')
            form.reset();
          });
      });
  };

  return (
    <form onSubmit={handleAddProduct} >
      <div className=" w-[80%] md:grid grid-cols-3 gap-x-10 gap-y-5 items-center justify-center mx-auto">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Product Name
          </label>
          <input
            required
            type="text"
            name="productName"
            id="name"
            placeholder="Enter Product Name Here"
            className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <label htmlFor="select" className="block mb-2 text-sm">
            Product category
          </label>
          <select
            name="category"
            required
            className="select select-primary w-full"
          >
            <option>gigabyte</option>
            <option>asus</option>
            <option>msi</option>
            <option>others</option>
          </select>
        </div>
        <div>
          <label htmlFor="select" className="block mb-2 text-sm">
            Product condition
          </label>
          <select
            name="condition"
            required
            className="select select-primary w-full"
          >
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
        </div>
        <div>
          <label htmlFor="image" className="block mb-2 text-sm">
            product image:
          </label>
          <input
            required
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered file-input-primary w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Product price:
          </label>
          <input
            required
            type="text"
            name="price"
            placeholder="Enter Product Price Here"
            className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Original Price:
          </label>
          <input
            required
            type="text"
            name="original_price"
            placeholder="Enter Product Price Here"
            className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Years of used:
          </label>
          <input
            required
            type="text"
            name="years_used"
            placeholder="Enter years of used"
            className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Post time:
          </label>
          <input
            required
            type="text"
            name="post_time"
            placeholder="Enter todays date"
            className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">
              Mobile number:
            </label>
          </div>
          <input
            type="text"
            name="mobileNumber"
            required
            placeholder="Enter Your Mobile Number"
            className="w-full   border rounded-md input input-bordered input-primary"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">
              Location:
            </label>
          </div>
          <input
            type="text"
            name="location"
            required
            placeholder="Enter Your Location"
            className="w-full   border rounded-md input input-bordered input-primary"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">
              Year of purchase:
            </label>
          </div>
          <input
            type="text"
            name="purchaseYear"
            required
            placeholder="Enter purchase year"
            className="w-full   border rounded-md input input-bordered input-primary"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">
              Description:
            </label>
          </div>
          <textarea
            type="text"
            name="description"
            required
            placeholder="Enter Details"
            className="w-full   border rounded-md input input-bordered input-primary"
          />
        </div>
        <div className="pb-24">
          <button className="btn btn-outline btn-primary w-full">
            {loading ? <LoadingSpinner></LoadingSpinner> : "Add product"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
