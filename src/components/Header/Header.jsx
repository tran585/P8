import { Link } from "react-router-dom"
import LOGO_1 from "../../assets/LOGO_1.svg"
import "./header.scss"

function Header() {
    return (
        <header>
            <img src={LOGO_1} alt="logo Kasa" />
            <nav>
              <Link to={"/"}>Accueil</Link>
              <Link to={"about"}>À propos</Link>
            </nav>
        </header>
    )
}

export default Header
