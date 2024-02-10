import LOGO_1_white from "../../assets/LOGO_1_white.svg"
import './footer.scss'


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-container-elements">
                    <img src={LOGO_1_white} alt="logo" ></img>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
