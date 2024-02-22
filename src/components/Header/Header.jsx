import { Link, useLocation } from "react-router-dom"
import LOGO_1 from "../../assets/logo/LOGO_1.svg"
import "./header.scss"

function Header() {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <header>
            <Link to={"/"}><img src={LOGO_1} alt="logo Kasa"/></Link>
            <nav>
              <Link className={currentPath === '/'? 'current-page' : ''} to={"/"}>Accueil</Link>
              <Link className={currentPath === '/about'? 'current-page' : ''}  to={"about"}>A propos</Link>
            </nav>
        </header>
    )
}

export default Header