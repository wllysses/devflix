import { createContext, ReactNode, useState, useEffect } from 'react'
import { api2 } from '../../services/api'

interface IChildren {
    children: ReactNode
}

interface IContext {
    genres: IGenrer[]
}

export interface IGenrer {
    id: number
    name: string
}

const initialValues = {
    genres: []
}


export const GlobalContext = createContext<IContext>(initialValues)

export const GlobalProvider = ({ children }: IChildren) => {

    const [genres, setGenres] = useState<IGenrer[]>(initialValues.genres)

    useEffect(() => {
        const getGenres = async () => {
            const response = await api2.get('/list')
            setGenres(response.data.genres)
        }

        getGenres()
    }, [])

    return (
        <GlobalContext.Provider value={{ genres }}>
            {children}
        </GlobalContext.Provider>
    )
}