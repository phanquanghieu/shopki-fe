let local = {}

local.set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

local.get = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

local.clear = () => {
  localStorage.clear()
}

local.setS = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

local.getS = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
}

local.clearS = () => {
  sessionStorage.clear()
}

export default local
