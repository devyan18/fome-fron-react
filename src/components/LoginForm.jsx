import { useForm } from '../hooks'
import { getUserByCredentials, getUserByToken } from '../services/user.service'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../providers/UserProvider'

const LoginForm = () => {
  const navigate = useNavigate()

  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: '12345678sebbA'
  })

  const { setUser } = useUser()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = await getUserByCredentials(values)

    if (!token) {
      reset()
      return
    }

    const res = await getUserByToken({ token })
    const { user } = await res.json()

    if (!user) {
      reset()
      return
    }

    setUser(user)

    localStorage.setItem('token', token)

    reset()
    navigate('/server', { replace: true })
  }

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

export default LoginForm
