import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import LoadingSpinner from '../../pages/Components/LoadingSpinner';

const AdminRoute = ({children}) => {
     const { user, loading } = useContext(AuthContext);
     const [isAdmin, isAdminLoading] = useAdmin(user?.email);
     const location = useLocation();
console.log(isAdmin);
     if (loading || isAdminLoading) {
       return <LoadingSpinner></LoadingSpinner>;
     }

     if (user && isAdmin) {
       return children;
     }

     return (
       <Navigate to="/login" state={{ form: location }} replace></Navigate>
     );
};

export default AdminRoute;