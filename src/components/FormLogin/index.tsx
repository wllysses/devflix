import './styles.scss'

export const FormLogin = () => {
    return (
        <div className="wrapper">
            <div className="form-login">
                <div className="form-login-header">
                    <h2>Bem-vindo</h2>
                </div>
                <div className="form-login-body">
                    <form>
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
                        <div className="checked-group">
                            <input 
                                type="checkbox" 
                                name="remember" 
                                id="rememberMe"
                                required
                                />
                            <label htmlFor="rememberMe">Manter-me logado</label>
                        </div>

                        <button>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}