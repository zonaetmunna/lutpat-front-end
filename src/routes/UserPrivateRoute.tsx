import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../app/store";

const UserPrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  /* if (isLoading) {
      return <Loading />;
    } */

  if (!isLoading && !user?.email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return <>{children}</>;
};

export default UserPrivateRoute;
