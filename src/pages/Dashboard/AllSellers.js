import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const {data: allsellers = []} = useQuery({
        queryKey: ['allseller'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/allsellers");
            const data = await res.json();
            return data;
        }
    })
    console.log(allsellers);

    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            {allsellers.map((allseller) => (
              <tr key={allseller._id}>
                <th>1</th>
                <td>{allseller.displayName}</td>
                <td>{allseller.email}</td>
                <td><button className='btn btn-xs btn-outline'>Delete Seller</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllSellers;