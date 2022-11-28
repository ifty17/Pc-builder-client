import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {

    ///products/myporducts
  const [adv, setAdv] = useState([])
    const { user } = useContext(AuthContext);

    const url = `https://y-eta-one.vercel.app/productsbyemail?email=${user?.email}`;

    const { data: myProducts = [] } = useQuery({
      queryKey: ["products", user?.email],
      queryFn: async () => {
        const res = await fetch(url);
        const data = res.json();
        return data;
      },
    });
    // console.log(myProducts);

    const handleAdv = (pro) =>{
      // const {
      //   category_id,
      //   condition,
      //   details,
      //   email,
      //   image,
      //   location,
      //   name,
      //   number,
      //   original_price,
      //   post_time,
      //   purchaseYear,
      //   resale_price,
      //   seller_name,
      //   status,
      //   years_used,
      // } = pro;

       fetch("https://y-eta-one.vercel.app/advertise", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(pro),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           toast.success("User created successful");
         });


    }

    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Advertise Product</th>
                <th>Delete Product</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.length > 0 &&
                myProducts.map((product, index,) => (
                  <tr key={product._id}>
                    <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.status}</td>
                    <td><button onClick={() => handleAdv(product)} className='btn btn-xs btn-outline'>Advertise</button></td>
                    <td><button className='btn btn-xs btn-outline'>Delete product</button></td>
                    
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProducts;