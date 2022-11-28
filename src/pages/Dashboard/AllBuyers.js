import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

     const { data: allbuyers = [], refetch } = useQuery({
       queryKey: ["allbuyers"],
       queryFn: async () => {
         const res = await fetch("https://y-eta-one.vercel.app/allbuyers");
         const data = await res.json();
         return data;
       },
     });
     console.log(allbuyers);

     const handleDeleteBuyer = buyer =>{
      fetch(`https://y-eta-one.vercel.app/buyer/${buyer._id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data =>{
        if (data.deletedCount) {
          refetch();
          toast.success(`Buyer ${buyer?.displayName} deleted successful`);
        }
      })

     }


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
                <td>
                  <img
                    className="w-16 rounded-full"
                    src={buyer?.image}
                    alt=""
                  />
                </td>
                <td>{buyer.displayName}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteBuyer(buyer)}
                    className="btn btn-xs btn-outline"
                  >
                    Delete Buyer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyers;