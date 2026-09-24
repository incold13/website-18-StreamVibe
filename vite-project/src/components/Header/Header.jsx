import "../Header/Header.scss"
import {Photo} from "../../photo.js"
export default function Header() {
    return(
        <>
            <header>
                <nav>
                    <img src={Photo.logo} alt="" />
                    <div className="nav">
                        <div className="nav_wh">
                            <button>Home</button>
                            <button>Movies & Shows</button>
                            <button>Support</button>
                            <button>Subscriptions</button>
                        </div>
                    </div>
                    <div>
                        <img src={Photo.search} alt="" />
                        <img src={Photo.notif} alt="" />
                    </div>
                </nav>
            </header>
        </>
    )
}