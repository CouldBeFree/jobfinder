import axiosFactory from 'axios'

export const axios = axiosFactory.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${process.env.BASE_API_URL}`
})

axios.interceptors.request.use(setHeader)
axios.interceptors.request.use(setAuthHeader)
axios.interceptors.request.use(headerCORS)

function setHeader(config) {
  config.headers['Content-Type'] = 'application/json'
  return config
}

function setAuthHeader(config) {
  config.headers['Authorization'] = 'Token' + ' ' + process.env.AUTHENTICATION_TOKEN
  return config
}

function headerCORS(config) {
  config.headers['Access-Control-Allow-Credentials'] = true
  config.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080/'
  return config
}
