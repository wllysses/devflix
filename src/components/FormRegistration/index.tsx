import './styles.scss'

export const FormRegistration = () => {
    return (
        <div className="wrapper">
            <div className="form-registration">
                <div className="form-registration-header">
                    <h2>Registrar-se</h2>
                </div>
                <div className="form-registration-body">
                    <form>
                        <div className="field-group">
                            <label>Nome</label>
                            <input 
                                type="text"
                                placeholder='Informe seu nome'
                            />
                        </div>
                        <div className="field-group">
                            <label>Sobrenome</label>
                            <input 
                                type="text"
                                placeholder='Informe seu sobrenome'
                            />
                        </div>
                        <div className="field-group">
                            <label>E-mail</label>
                            <input 
                                type="email"
                                placeholder='Informe seu e-mail'
                            />
                        </div>
                        <div className="field-group">
                            <label>Senha</label>
                            <input 
                                type="password"
                                placeholder='Informe sua senha'
                            />
                        </div>
                        <div className="field-group">
                            <label>Confirmar senha</label>
                            <input 
                                type="password"
                                placeholder='Confirme a sua senha'
                            />
                        </div>

                        <button>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}