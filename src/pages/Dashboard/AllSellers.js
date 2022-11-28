import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const {data: allsellers = [], refetch} = useQuery({
        queryKey: ['allseller'],
        queryFn: async () =>{
            const res = await fetch("https://y-eta-one.vercel.app/allsellers");
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = (seller) => {
      fetch(`https://y-eta-one.vercel.app/seller/${seller._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
            toast.success(`Seller ${seller?.displayName} deleted successful`);
          }
        });
    };

    const handleVerifySeller = (id) =>{
      console.log(id);
      fetch(`https://y-eta-one.vercel.app/verify/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Seller verified successful");
            console.log(data);
          }
        });

    }

    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Image</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Verify Seller</th>
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            {allsellers.map((allseller) => (
              <tr key={allseller._id}>
                <th>1</th>
                <td><img className='w-16 rounded-full' src={allseller?.image} alt="" /></td>
                <td>{allseller?.displayName}</td>
                <td>{allseller?.email}</td>
                <td><button onClick={() => handleVerifySeller(allseller?._id)} className='btn btn-xs btn-outline'>Verify</button></td>
                <td><button onClick={() => handleDeleteSeller(allseller) } className='btn btn-xs btn-outline'>Delete Seller</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllSellers;