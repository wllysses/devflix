import axios from 'axios'
import { IInputs } from '../components/FormRegistration'

const apiKey = '1dd7bab575c195bc4984778143c79c06'

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/movie/',
    params: {
        api_key: apiKey,
        language: 'pt-BR'
    },
})

export const api2 = axios.create({
    baseURL: 'https://api.themoviedb.org/3/genre/movie/',
    params: {
        api_key: apiKey,
        language: 'pt-BR'
    }
})

export const api3 = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: apiKey,
        language: 'pt-BR'
    }
})

export const listUsers = async () => {
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json()

    return await data
}

export const registerUser = async ({firstName, lastName, email, password, confirmPassword}: IInputs) => {
    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
    })
}