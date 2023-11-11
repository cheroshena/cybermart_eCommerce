import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {

    const storedToken = sessionStorage.getItem('token');
    console.log('Stored Token :',storedToken);

    return storedToken ?(
        <Navigate to ='/cart' replace={true}/>,
        <Navigate to ='/paymentgateway' replace={true}/>
    ):(
        children
    );
};