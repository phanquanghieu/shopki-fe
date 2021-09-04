import qs from 'query-string'
import auth from 'services/auth'

let request = {}
const sendRequest = async (url = '', options = {}) => {
  try {
    let response = await fetch(process.env.REACT_APP_BE_URL + url, {
      headers: {
        'Content-Type': 'application/json',
        ...auth.getHeaderAuthentication(),
      },
      ...options,
    })

    if (response.ok) return await response.json()
    if (response.status === 404) alert('Not found')
    if (response.status === 403) alert("You don't have permission")
    if (response.status === 500) alert('Server error')
    return null
  } catch (error) {
    console.error(error)
    alert('Request error')
    return null
  }
}

request.get = async (url = '', params = null) => {
  const queryString = params ? '?' + qs.stringify(params) : ''
  return await sendRequest(url + queryString)
}

request.post = async (url = '', data = {}) => {
  return await sendRequest(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

request.put = async (url = '', data = {}) => {
  return await sendRequest(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

request.delete = async (url = '') => {
  return await sendRequest(url, {
    method: 'DELETE',
  })
}

export default request
