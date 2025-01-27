import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrectToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({children}:{children:ReactNode}) {

  const token = useAppSelector(useCurrectToken);
  if(!token){
    return <Navigate to="/login" replace={true}/>
  }
  return children;
}

