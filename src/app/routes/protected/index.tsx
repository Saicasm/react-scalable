import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    isPublic?: boolean;
    isAuthorized: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isPublic = false, isAuthorized }) => {
    return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;