import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { GlobalContext } from '../../contexts/Global'
import './styles.scss'

export interface IInputs {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

export const FormRegistration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IInputs>()

    const { handleFormRegister } = useContext(GlobalContext)

    return (
        <div className="wrapper">
            <div className="form-registration">
                <div className="form-registration-header">
                    <h2>Registrar-se</h2>
                </div>
                <div className="form-registration-body">
                    <form onSubmit={handleSubmit(handleFormRegister)}>
                        <div className="field-group">
                            <label>Nome</label>
                            <input 
                                type="text"
                                placeholder='Informe seu nome'
                                { ...register('firstName', { required: true }) }
                            />
                            { errors.firstName && <span className='alert-message'>Preencha o campo.</span> }
                        </div>
                        <div className="field-group">
                            <label>Sobrenome</label>
                            <input 
                                type="text"
                                placeholder='Informe seu sobrenome'
                                { ...register('lastName', { required: true }) }
                            />
                            { errors.lastName && <span className="alert-message">Preencha o campo.</span> }
                        </div>
                        <div className="field-group">
                            <label>E-mail</label>
                            <input 
                                type="email"
                                placeholder='Informe seu e-mail'
                                { ...register('email', { required: true }) }
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
                        <div className="field-group">
                            <label>Confirmar senha</label>
                            <input 
                                type="password"
                                placeholder='Confirme a sua senha'
                                { ...register('confirmPassword', { required: true }) }
                            />
                            { errors.confirmPassword && <span className="alert-message">Preencha o campo.</span> }
                        </div>

                        <button>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}