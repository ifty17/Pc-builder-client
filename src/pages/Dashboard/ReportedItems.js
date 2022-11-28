import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {

    const { data: reportedItems = [] } = useQuery({
      queryKey: ["reportedItems"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/reportedItems");
        const data = await res.json();
        return data;
      },
    });

    return (
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Id</th>
              <th>Product Owner Name</th>
              <th>Product Owner Email</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems?.map((items, i) => (
              <tr key={items?._id}>
                <th>{i + 1}</th>
                <td>{items?.name}</td>
                <td>{items?._id}</td>
                <td>{items?.seller_name}</td>
                <td>{items?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ReportedItems;