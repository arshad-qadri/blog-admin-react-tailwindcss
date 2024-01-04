import React from 'react'
import {  Navigate } from "react-router-dom";
import useAuthServices from "../../services/AuthService";
const PublicRoute = ({children}) => {
    const { authenticated } = useAuthServices();

    return  !authenticated ? children : <Navigate to="/" replace />;
}

export default PublicRoute
