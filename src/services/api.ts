import axios from 'axios'

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