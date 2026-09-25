import {Photo} from "../../photo.js";
import "../Sect2/Sect2.scss"
export default function Sect2() {
    return(
        <>
            <section className="sect2">
                <div className="sect2_all">
                    <div className="sect2_header">
                        <div className="sect2_header_left">
                            <div className="sect2_title">
                                <p>Explore our wide variety of categories</p>
                            </div>
                            <div className="sect2_desc">
                                <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                            </div>
                        </div>
                        <div className="sect2_nav">
                            <div classn="sect2_nav_btn">
                                <img src={Photo.sect2arrow1} alt=""></img>
                            </div>
                            <div class="sect2_nav_indicators">
                                <div className="sect2_indicator_active"></div>
                                <div className="sect2_indicator"></div>
                                <div className="sect2_indicator"></div>
                                <div className="sect2_indicator"></div>
                            </div>
                            <div className="sect2_nav_btn">
                                <img src={Photo.sect2arrow2} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="sect2_cards_all">
                        <div className="sect2_card">
                            <div className="sect2_card_wh">
                                <img className="sect2_poster_img" src={Photo.sect2cont1} alt=""></img>
                                <div className="sect2_card_bottom">
                                    <p className="sect2_card_name">Action</p>
                                    <div className="sect2_card_arrow">
                                        <img src={Photo.sect2arrow3} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sect2_card">
                            <div className="sect2_card_wh">
                                <img className="sect2_poster_img" src={Photo.sect2cont2} alt=""></img>
                                <div className="sect2_card_bottom">
                                    <p className="sect2_card_name">Adventure</p>
                                    <div className="sect2_card_arrow">
                                        <img src={Photo.sect2arrow3} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sect2_card">
                            <div className="sect2_card_wh">
                                <img className="sect2_poster_img" src={Photo.sect2cont3} alt=""></img>
                                <div className="sect2_card_bottom">
                                    <p className="sect2_card_name">Comedy</p>
                                    <div className="sect2_card_arrow">
                                        <img src={Photo.sect2arrow3} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sect2_card">
                            <div className="sect2_card_wh">
                                <img className="sect2_poster_img" src={Photo.sect2cont4} alt=""></img>
                                <div className="sect2_card_bottom">
                                    <p className="sect2_card_name">Drama</p>
                                    <div className="sect2_card_arrow">
                                        <img src={Photo.sect2arrow3} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sect2_card">
                            <div className="sect2_card_wh">
                                <img className="sect2_poster_img" src={Photo.sect2cont5} alt=""></img>
                                <div className="sect2_card_bottom">
                                    <p className="sect2_card_name">Horror</p>
                                    <div className="sect2_card_arrow">
                                        <img src={Photo.sect2arrow3} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}