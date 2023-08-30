import * as usersAPI from './users-api.cjs'

export async function signUp (userData) {
    const token = await usersAPI.signUp(userData)
    localStorage.setItem('token', token)
    return getUser()
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
}