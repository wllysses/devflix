import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { GlobalContext } from '../../contexts/Global'
import './styles.scss'

export interface ILogin {
    email: string
    password: string
}

export const FormLogin = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm<ILogin>()
    const { handleValidadeLogin } = useContext(GlobalContext)

    return (
        <div className="wrapper">
            <div className="form-login">
                <div className="form-login-header">
                    <h2>Bem-vindo</h2>
                </div>
                <div className="form-login-body">
                    <form onSubmit={handleSubmit(handleValidadeLogin)}>
                        <div className="field-group">
                            <label>E-mail</label>
                            <input 
                                type="email"
                                placeholder='Informe seu e-mail'
                                { ...register('email',  { required: true }) }
                            />
                            { errors.email && <span className="alert-message">Preencha o campo.</span> }
                        </div>
                        <div className="field-group">
                            <label>Senha</label>
                            <input 
                                type="password"
                                placeholder='Informe sua senha'
                                { ...register('password', { required: true }) }
                            />
                            { errors.password && <span className="alert-message">Preencha o campo.</span> }
                        </div>

                        <button>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}