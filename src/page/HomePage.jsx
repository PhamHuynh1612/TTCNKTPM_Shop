import { useNavigate, Navigate } from "react-router-dom"
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function HomePage() {
    return <>
    <div>
        <Header></Header>
        <NavBar></NavBar>
    </div>
    </>
}