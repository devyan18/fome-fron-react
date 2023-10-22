import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, AuthPage, RegisterPage, ServerPage } from './pages'
import { LoggedGuard } from './routes/logged.guard'
import { useUser } from './providers/UserProvider'
import { Navbar } from './components'

const RouterManager = ({ io }) => {
  const { user } = useUser()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<LoggedGuard user={user} />}>
          <Route path="/server" element={<ServerPage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}

export default RouterManager

/* <Route path="/tasks/:projectId" element={<TasksPage io={io} />} />
          <Route path="/tasks/:projectId/new-task" element={<NewTaskPage io={io} />} /> */
