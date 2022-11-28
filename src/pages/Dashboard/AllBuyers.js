import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

     const { data: allbuyers = [] } = useQuery({
       queryKey: ["allbuyers"],
       queryFn: async () => {
         const res = await fetch("http://localhost:5000/allbuyers");
         const data = await res.json();
         return data;
       },
     });
     console.log(allbuyers);

    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete Buyer</th>
            </tr>
          </thead>
          <tbody>
            {allbuyers.map((buyer) => (
              <tr key={buyer._id}>
                <th>1</th>
                <td><img className='w-16 rounded-full' src={buyer?.image} alt="" /></td>
                <td>{buyer.displayName}</td>
                <td>{buyer.email}</td>
                <td><button className='btn btn-xs btn-outline'>Delete Buyer</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyers;