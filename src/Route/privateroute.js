import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {

    const storedToken = localStorage.getItem('token');
    console.log('Stored Token:',storedToken);

    return storedToken ? (
        children
    ):(
        <Navigate to = '/' replace={true}/>
    );
};