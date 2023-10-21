import { useContext, useEffect, useState, createContext } from 'react'
import { getUserByToken } from '../services/user.service'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

  const findUser = async () => {
    const token = localStorage.getItem('token')

    if (!token) return null

    getUserByToken({ token })
      .then((user) => {
        if (!user) {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          setUser(null)
        }
        setUser(user)
      })
  }

  useEffect(() => {
    findUser()
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  const value = {
    user,
    setUser,
    findUser
  }

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
