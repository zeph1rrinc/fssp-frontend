import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const login = async (login, password) => {
    const {data} = await $host.post('/api/auth/login', {login, password})
    localStorage.setItem('Token', data.token)
    return jwtDecode(data.token)
}

export const get_all_users = async () => {
    const {data} = await $authHost.get('/api/auth')
    return data
}

export const delete_user = async (id) => {
    const {data} = await $authHost.delete(`/api/auth/${id}`)
    return data.message
}