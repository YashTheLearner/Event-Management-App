import axios from "axios"
const instance = axios.create({
    baseURL:"https://quick-list-mern-todo.vercel.app/api"
})
export default instance