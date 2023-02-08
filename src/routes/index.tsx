import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/details/:id" element={ <Details /> } />
            </Routes>
        </BrowserRouter>
    )
}