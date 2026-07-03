import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../../features/auth/auth.context";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
