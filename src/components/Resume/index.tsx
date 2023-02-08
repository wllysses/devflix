import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api3 } from "../../services/api"
import './styles.scss'

interface IDetails {
    title: string
    poster_path:  string
    overview: string
    release_date: string
}


export const Resume = () => {
    
    const { id } = useParams()
    const [details, setDetails] = useState<IDetails>({})
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        const getDetails = async () => {
            const detail = await api3.get(`/${id}`)
            setDetails(detail.data)
        } 
        getDetails()

        console.log(details)
    }, [])

    return (
        <div className="container">
            <div className="details-wrapper">
                <img src={`${imgBaseUrl}/${details.poster_path}`} alt="" />
                <div className="movie-data">
                    <h2>{details.title}</h2>
                    <p>{details.overview}</p>

                    <ul>
                        <li>Lançamento - {details.release_date}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}