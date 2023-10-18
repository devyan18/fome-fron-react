import { Outlet, Navigate } from "react-router-dom"
import { useUser } from "../providers/UserProvider"

export const ProtectedRoute = () => {

  const { user } = useUser()
  
  if(user === null) return <Navigate to="auth" />

  return (
    <Outlet />
  )
}
