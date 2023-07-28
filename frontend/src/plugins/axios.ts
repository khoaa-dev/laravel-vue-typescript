import { Plugin } from 'vue'
import axios, { AxiosInstance } from 'axios'

const AxiosPlugin: Plugin = {
  install(app) {
    // Set the base URL for requests
    axios.defaults.baseURL = import.meta.env.VITE_API_URL as string

    // Create a new Axios instance
    const instance: AxiosInstance = axios.create({
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })

    // Add the instance to Vue's prototype
    app.config.globalProperties.$http = instance
  },
}

export default AxiosPlugin
