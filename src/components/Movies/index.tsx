import { useContext, useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import { GlobalContext } from '../../contexts/Global'
import { Card } from '../Card'
import './styles.scss'
import { api } from '../../services/api'

interface IProps {
    id: number
    name: string
}

interface IMovies {
    id: number
    original_title: string
    poster_path: string
}

export const Movies = ({ id, name }: IProps) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const response = await api.get(`/?with_genres=${id}`)

            setMovies(response.data.results)
        }

        getMovies()
    }, [])

    return (
        <div className="movies-wrapper">
            <h2>{name}</h2>

            <Carousel cols={5} rows={1} gap={15} loop>
                {
                    movies.map((movie: IMovies) => {
                        return (
                            <Carousel.Item key={movie.id}>
                                <Card
                                    id={movie.id}
                                    title={movie.original_title}
                                    poster={movie.poster_path}

                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}