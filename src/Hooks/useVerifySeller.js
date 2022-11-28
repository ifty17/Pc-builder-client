import { useEffect, useState } from "react";

const useVerifySeller = (email) =>{
     const [isSellerVerified, setIsSellerVerified] = useState(false);
     const [isVerifyLoading, setIsVerifyLoading] = useState(true);
     useEffect(() => {
       if (email) {
         fetch(`https://y-eta-one.vercel.app/verify/${email}`)
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