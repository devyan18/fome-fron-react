import { SERVER_URL } from '../utilities/constants'

export async function getUserByCredentials ({ email, password }) {
  try {
    const res = await fetch(`${SERVER_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (res.status === 200) {
      const { token } = await res.json()
      return token
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getUserByToken ({ token }) {
  return await fetch(`${SERVER_URL}/api/auth`, {
    method: 'POST',
    headers: {
      Authorization: token
    }
  })
}

export const createUser = async ({ email, password, nickName }) => {
  return await fetch(`${SERVER_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, nickName })
  })
}
