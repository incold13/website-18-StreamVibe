import "../Header/Header.scss"
import {Photo} from "../../photo.js"
export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <img src={Photo.logo} alt="StreamVibe Logo" />
                    <div className="nav">
                        <div className="nav_wh">
                            <button className="active">Home</button>
                            <button>Movies & Shows</button>
                            <button>Support</button>
                            <button>Subscriptions</button>
                        </div>
                    </div>
                    <div className="actions">
                        <img src={Photo.search} alt="Search" />
                        <img src={Photo.notif} alt="Notifications" />
                    </div>
                </nav>
            </header>
        </>
    )
}