import Header from "../Header/Header.jsx"
import {Photo} from "../../photo.js";
import "../Sect1/Sect1.scss"
export default function Sect1() {
    return(
        <>
            <section className="sect1">
                <div className="sect1_bg">
                    <img className="sect1_bg_img" src={Photo.sect1bg} alt=""></img>
                    <div className="sect1_overlay"></div>
                </div>
                <Header/>
                <div className="sect1_all">
                    <div className="sect1_play_box">
                        <img src={Photo.sect1center} alt=""></img>
                    </div>
                    <div className="sect1_content">
                        <div className="sect1_content_wh">
                            <div className="sect1_title">
                                <p>The Best Streaming Experience</p>
                            </div>
                            <div className="sect1_desc">
                                <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                            </div>
                            <div className="sect1_btn">
                                <img src={Photo.sect1play} alt=""></img>
                                <p>Start Watching Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}