import local from './local'

const URL_BY_USER_TYPE = {
  buyer: '',
  seller: '/seller',
}

let auth = {}

auth.signUp = async (phone, password, userType) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_BE_URL + URL_BY_USER_TYPE[userType] + '/signup',
      {
        method: 'POST',
        body: JSON.stringify({ phone, password }),
      }
    )
    if (!response.ok) return { error: 1, message: 'Server error' }
    return await response.json()
  } catch (error) {
    console.error(error)
    return { error: 1, message: 'Server error' }
  }
}

auth.login = async (phone, password, userType) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_BE_URL + URL_BY_USER_TYPE[userType] + '/login',
      {
        method: 'POST',
        body: JSON.stringify({ phone, password }),
      }
    )
    if (!response.ok) return { error: 1, message: 'Server error' }
    response = await response.json()
    if (response?.error === 0) {
      local.set('user', response.data.user)
      local.set('token', response.data.token)
    }
    return response
  } catch (error) {
    console.error(error)
    return { error: 1, message: 'Server error' }
  }
}

auth.logout = () => {
  local.clear()
}

auth.getUser = () => {
  return local.get('user')
}

auth.getHeaderAuthentication = () => {
  const token = local.get('token')
  return token ? { Authentication: `Bearer ${token}` } : {}
}

export default auth
