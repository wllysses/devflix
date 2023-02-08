import './styles.scss'

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <header>
                    <h1>DEV<span>FLIX</span></h1>

                    <nav>
                        <ul>
                            <li>Séries</li>
                            <li>Filmes</li>
                            <li>Gêneros</li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}