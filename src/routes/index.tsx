import { Route, Routes } from "react-router-dom"
import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Movies } from "../pages/Movies"
import { Register } from "../pages/Register"

export const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/movies" element={ <Movies /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/details/:id" element={ <Details /> } />
            </Routes>
    )
}