import "../Header/Header.scss"
import {Photo} from "../../photo.js"
export default function Header() {
    return(
        <>
        <header>
            <nav>
                <img src={Photo.logo} alt="" />
            </nav>
        </header>
        </>
    )
}