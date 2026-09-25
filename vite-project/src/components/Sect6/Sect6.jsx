import {Photo} from "../../photo.js";
import "../Sect6/Sect6.scss"
export default function Sect6() {
    return(
        <>
            <section className="sect6">
                <div className="sect6_all">
                    <div className="sect6_bg">
                        <img className="sect6_bg_img" src={Photo.sect6_bg} alt=""></img>
                        <div className="sect6_overlay"></div>
                    </div>
                    <div className="sect6_wh">
                        <div className="sect6_text">
                            <div className="sect6_title">
                                <p>Start your free trial today!</p>
                            </div>
                            <div className="sect6_desc">
                                <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                            </div>
                        </div>
                        <div className="sect6_btn">
                            <p>Start a Free Trial</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}