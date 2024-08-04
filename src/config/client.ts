import axios, { AxiosInstance } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string, 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000
})

export default client


