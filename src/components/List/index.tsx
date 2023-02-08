import { useContext } from "react"
import { GlobalContext } from "../../contexts/Global"
import { Movies } from "../Movies"

export const ListMovies = () => {
    
    const { genres } = useContext(GlobalContext)

    return (
        <div className="container p-3">
        {
            genres && 
            genres.map((genre) => {
                return (
                    <Movies
                        key={genre.id}
                        id={genre.id}
                        name={genre.name}

                    />
                )
            })
        }
        </div>
    )
}