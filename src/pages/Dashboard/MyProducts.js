import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {

    ///products/myporducts

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/productsbyemail?email=${user?.email}`;

    const { data: myProducts = [] } = useQuery({
      queryKey: ["products", user?.email],
      queryFn: async () => {
        const res = await fetch(url);
        const data = res.json();
        return data;
      },
    });
    console.log(myProducts);
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
                myProducts.map((product, index) => (
                  <tr key={product._id}>
                    <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.status}</td>
                    <td><button className='btn btn-xs btn-outline'>Advertise</button></td>
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