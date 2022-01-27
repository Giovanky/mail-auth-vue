import axios from 'axios'

const pkappApi = axios.create({
    baseURL: 'http://localhost:3665/api'
})

export default pkappApi