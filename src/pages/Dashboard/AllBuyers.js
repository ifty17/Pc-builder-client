import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

     const { data: alllbuyers = [] } = useQuery({
       queryKey: ["allbuyers"],
       queryFn: async () => {
         const res = await fetch("http://localhost:5000/allbuyers");
         const data = await res.json();
         return data;
       },
     });

    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {alllbuyers.map((buyer) => (
              <tr key={buyer._id}>
                <th>1</th>
                <td><img className='w-16 rounded-full' src={buyer.image} alt="" /></td>
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