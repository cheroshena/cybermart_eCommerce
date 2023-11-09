import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {

    const storedToken = localStorage.getItem('token');
    console.log('Stored Token :',storedToken);

    return storedToken ?(
        <Navigate to ='/dashboard' replace={true}/>,
        <Navigate to ='/listproducts' replace={true}/>,
        <Navigate to ='/addproducts' replace={true}/>,
        <Navigate to ='/salesTracking' replace={true}/>,
        <Navigate to ='/Sellerwallet' replace={true}/>,
        <Navigate to ='/cart' replace={true}/>,
        <Navigate to ='/paymentgateway' replace={true}/>
    ):(
        children
    );
};