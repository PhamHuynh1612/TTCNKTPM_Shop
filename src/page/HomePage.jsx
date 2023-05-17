import { useNavigate, Navigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        alert("Hello");
      navigate("/login");
    }
    return <>
    <div>
        <p onClick={handleClick}>HomePage</p>
    </div>
    </>
}