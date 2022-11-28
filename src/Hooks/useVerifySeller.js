import { useEffect, useState } from "react";

const useVerifySeller = (email) =>{
     const [isSellerVerified, setIsSellerVerified] = useState(false);
     const [isVerifyLoading, setIsVerifyLoading] = useState(true);
     useEffect(() => {
       if (email) {
         fetch(`http://localhost:5000/verify/${email}`)
           .then((res) => res.json())
           .then((data) => {
             setIsSellerVerified(data.isSellerVerified);
             setIsVerifyLoading(false);
           });
       }
     }, [email]);
     return [isSellerVerified, isVerifyLoading];
}


export default useVerifySeller;