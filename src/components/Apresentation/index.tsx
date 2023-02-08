import { Link } from 'react-router-dom'
import './styles.scss'

export const Apresentation = () => {
    return (
        <div className="wrapper">
            <h2>DEV<span>FLIX</span></h2>

            <div className="buttons">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Registrar</button>
                </Link>
            </div>
        </div>
    )
}