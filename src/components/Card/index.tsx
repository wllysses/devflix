import { Link } from 'react-router-dom'
import './styles.scss'

interface IProps {
    id: number
    title: string
    poster: string
}

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'

export const Card = ({ id, title, poster }: IProps) => {
    return (
        <div className="card-wrapper">
            <Link to={`/details/${id}`}>
                <img
                    src={`${imgBaseUrl}/${poster}`} 
                    alt={`Movie title: ${title}`}
                />
            </Link>
        </div>
    )
}