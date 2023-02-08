import { createContext, ReactNode, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' 
import { IInputs } from '../../components/FormRegistration'
import { api2, listUsers, registerUser } from '../../services/api'
import { ILogin } from '../../components/FormLogin';

import 'react-toastify/dist/ReactToastify.css';

interface IChildren {
    children: ReactNode
}

interface IContext {
    genres: IGenrer[]
    handleFormRegister: (data: IInputs) => void
    handleValidadeLogin: (data: ILogin) => void
}

export interface IGenrer {
    id: number
    name: string
}

const initialValues = {
    genres: [],
    handleFormRegister: () => {},
    handleValidadeLogin: () => {}
}


export const GlobalContext = createContext<IContext>(initialValues)

export const GlobalProvider = ({ children }: IChildren) => {

    const [genres, setGenres] = useState<IGenrer[]>(initialValues.genres)

    const navigate = useNavigate()

    useEffect(() => {
        const getGenres = async () => {
            const response = await api2.get('/list')
            setGenres(response.data.genres)
        }
        
        getGenres()
    }, [])

    const handleFormRegister = async (data: IInputs) => {

        const users = await listUsers()

        const filteredUsers = users.filter((user: IInputs) => user.email === data.email)

        if(filteredUsers.length >= 1) {
            toast.error('E-mail já está cadastrado. Tente novamente.')
            return
        }
        
        await registerUser(data)
        toast.success('Usuário cadastrado com sucesso!')
    }

    const handleValidadeLogin = async (data: ILogin) => {
        
        const users = await listUsers()
        const filteredUsers = users.filter((user: ILogin) => user.email === data.email && user.password === data.password)

        if(filteredUsers.length === 0) {
            toast.error('Usuário ou senha incorretos. Tente novamente')
            return
        }

        toast.success('Login realizado com sucesso! Seja bem-vindo.')
        navigate('/movies')
    }
    
    return (
        <GlobalContext.Provider value={{ genres, handleFormRegister, handleValidadeLogin }}>
            {children}
        </GlobalContext.Provider>
    )
}