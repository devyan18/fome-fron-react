import { useForm } from '../hooks/useForm'
import { getUserByCredentials, getUserByToken } from '../services/user.service'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../providers/UserProvider'
import { useEffect } from 'react'

export const LoginForm = () => {
  const navigate = useNavigate()

  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: '12345678sebbA'
  })

  const { setUser } = useUser()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = await getUserByCredentials(values)
    console.log(token)
    if (!token) {
      reset()
      return
    }

    const user = await getUserByToken({ token })

    if (!user) {
      reset()
      return
    }
    setUser(user)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    reset()
    navigate('/server', { replace: true })
  }

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/server', { replace: true })
  }, [navigate])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input-login">Email:</label>
      <input
        type="email"
        name="email"
        id="email-input-login"
        placeholder="example@test.com"
        onChange={handleInputChange}
        value={values.email}
      />
      <label htmlFor="password-input-login">Password:</label>
      <input
        type="password"
        name="password"
        id="password-input-login"
        placeholder="*************"
        onChange={handleInputChange}
        value={values.password}
      />
      <button type="submit">Send</button>
    </form>
  )
}
