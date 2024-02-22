import LOGO_1_white from "../../assets/logo/LOGO_1_white.svg"
import { Link } from "react-router-dom"
import './footer.scss'


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-container-elements">
                    <Link to={"/"}><img src={LOGO_1_white} alt="logo" ></img></Link>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
