import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useBuyer from '../../../Hooks/useBuyer';
import LoadingSpinner from '../../../pages/Components/LoadingSpinner';

const BuyersRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
      return <LoadingSpinner></LoadingSpinner>;
    }

    if (user && isBuyer.isBuyer) {
      return children;
    }

    return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default BuyersRoute;