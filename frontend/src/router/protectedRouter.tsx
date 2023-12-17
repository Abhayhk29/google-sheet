import { Fragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { cookie } from '../utils';


type ProtectedRouteProps = {
    children: ReactNode;
    isAuthenticated?: boolean;
    redirectIfLogin?: boolean;
}

const ProtectedRoutes = ({
    children,
    isAuthenticated = true,
    redirectIfLogin = false
}: ProtectedRouteProps) => {
    let autToken = cookie.get("auth_token");

    if(autToken && redirectIfLogin){
        return <Navigate replace to="/sheet/list" />
    }
    
    if(isAuthenticated && !autToken){
        return <Navigate replace to="/auth/sign-in" />
    }

    return <Fragment>{children}</Fragment>
}

export default ProtectedRoutes;