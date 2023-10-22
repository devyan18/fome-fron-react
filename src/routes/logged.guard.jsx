import { Outlet, useNavigate } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { getUserByToken } from '../services/user.service'
import { useUser } from '../providers/UserProvider'

export const LoggedGuard = () => {
  const navigate = useNavigate()

  const { user, setUser } = useUser()

  useEffect(() => {
    if (user) return

    const token = localStorage.getItem('token')

    if (!token) navigate('/auth', { replace: true })

    getUserByToken({ token })
      .then((res) => res.json())
      .then(({ user }) => {
        if (!user) {
          localStorage.removeItem('token')
          navigate('/auth', { replace: true })
        }
        setUser(user)
      })
  }, [user, navigate, setUser])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  )
}
