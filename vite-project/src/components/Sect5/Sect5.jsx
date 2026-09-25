import {Photo} from "../../photo.js";
import "../Sect5/Sect5.scss"
export default function Sect5() {
    return(
        <>
            <section className="sect5">
                <div className="sect5_all">
                    <div className="sect5_header">
                        <div className="sect5_header_left">
                            <div className="sect5_title">
                                <p>Choose the plan that's right for you</p>
                            </div>
                            <div className="sect5_desc">
                                <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                            </div>
                        </div>
                        <div className="sect5_toggle">
                            <div className="sect5_toggle_btn_active">
                                <p>Monthly</p>
                            </div>
                            <div className="sect5_toggle_btn">
                                <p>Yearly</p>
                            </div>
                        </div>
                    </div>
                    <div className="sect5_cards_all">
                        <div className="sect5_card">
                            <div className="sect5_card_wh">
                                <div className="sect5_card_top">
                                    <p className="sect5_plan_title">Basic Plan</p>
                                    <p className="sect5_plan_desc">Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                </div>
                                <div className="sect5_price_box">
                                    <p className="sect5_price">$9.99</p>
                                    <p className="sect5_period">/month</p>
                                </div>
                                <div className="sect5_btns_row">
                                    <div className="sect5_btn_trial">
                                        <p>Start Free Trial</p>
                                    </div>
                                    <div className="sect5_btn_choose">
                                        <p>Choose Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sect5_card">
                            <div className="sect5_card_wh">
                                <div className="sect5_card_top">
                                    <p className="sect5_plan_title">Standard Plan</p>
                                    <p className="sect5_plan_desc">Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                                </div>
                                <div className="sect5_price_box">
                                    <p className="sect5_price">$12.99</p>
                                    <p className="sect5_period">/month</p>
                                </div>
                                <div className="sect5_btns_row">
                                    <div className="sect5_btn_trial">
                                        <p>Start Free Trial</p>
                                    </div>
                                    <div className="sect5_btn_choose">
                                        <p>Choose Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sect5_card">
                            <div className="sect5_card_wh">
                                <div className="sect5_card_top">
                                    <p className="sect5_plan_title">Premium Plan</p>
                                    <p className="sect5_plan_desc">Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                                </div>
                                <div className="sect5_price_box">
                                    <p className="sect5_price">$14.99</p>
                                    <p className="sect5_period">/month</p>
                                </div>
                                <div className="sect5_btns_row">
                                    <div className="sect5_btn_trial">
                                        <p>Start Free Trial</p>
                                    </div>
                                    <div className="sect5_btn_choose">
                                        <p>Choose Plan</p>
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