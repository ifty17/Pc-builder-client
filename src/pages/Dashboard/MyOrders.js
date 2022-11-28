import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {

    const {user} = useContext(AuthContext);

    const url = `https://y-eta-one.vercel.app/orders?email=${user?.email}`;
    
    const {data: orders = []} = useQuery({
        queryKey:['orders', user?.email],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
    console.log(orders);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.length > 0 &&
              orders?.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order?.productName}</td>
                  <td>${order?.price}</td>
                  <td><button className="btn btn-xs btn-outline">Pay now</button></td>
                </tr>
              ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
