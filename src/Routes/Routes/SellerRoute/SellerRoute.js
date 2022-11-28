import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useSeller from '../../../Hooks/useSeller';
import LoadingSpinner from '../../../pages/Components/LoadingSpinner';

const SellerRoute = ({children}) => {
   const { user, loading } = useContext(AuthContext);
   const [isSeller, isSellerLoading] = useSeller(user?.email);
   const location = useLocation();
   console.log(isSeller);
   
   if (loading || isSellerLoading) {
     return <LoadingSpinner></LoadingSpinner>;
   }

   if (user && isSeller.isSeller) {
     return children;
   }

   return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default SellerRoute;