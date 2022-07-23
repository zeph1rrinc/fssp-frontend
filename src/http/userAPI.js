import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const login = async (login, password) => {
    const {data} = await $host.post('/api/auth/login', {login, password})
    localStorage.setItem('Token', data.token)
    return jwtDecode(data.token)
}

