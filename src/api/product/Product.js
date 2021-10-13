import local from '../../services/local'

export const createProduct=async (shopId,name,price)=>{
  try {
    let response = await fetch(
      process.env.REACT_APP_BE_URL+ '/api/product/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price,shopId }),
      }
    )
    if (!response.ok) return { error: 1, message: 'Server error' }
    response = await response.json()
    local.set('user', response?.user)
    local.set('token', response.token)

    return response
  } catch (error) {
    console.error(error)
    return { error: 1, message: 'Server error' }
  }
}
