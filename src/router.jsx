import { Navigate, Route, Routes } from "react-router-dom"
import { TasksPage, HomePage, AuthPage, NewTaskPage, RegisterPage } from "./pages"
import { UserProvider } from "./providers/UserProvider"
import { ProtectedRoute } from "./routes/ProtectedRoute"

export const RouterManager = ({ io }) => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route element={<ProtectedRoute/>}>
          <Route path="/tasks/:projectId" element={<TasksPage io={io} />} />
          <Route path="/tasks/:projectId/new-task" element={<NewTaskPage io={io} />} />
        </Route>
        
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </UserProvider>
  )
}
