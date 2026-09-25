import {Photo} from "../../photo.js";
import "../Sect3/Sect3.scss"
export default function Sect3() {
    return(
        <>
            <section class="sect3">
                <div class="sect3_all">
                    <div class="sect3_header">
                        <div class="sect3_title">
                            <p>We Provide you streaming experience across various devices.</p>
                        </div>
                        <div class="sect3_desc">
                            <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                        </div>
                    </div>
                    <div class="sect3_cards_all">
                        <div class="sect3_row">
                            <div class="sect3_card">
                                <div class="sect3_card_wh">
                                    <div class="sect3_card_top">
                                        <div class="sect3_icon_box">
                                            <img src={Photo.sect3_1} alt=""></img>
                                        </div>
                                        <p>Smartphones</p>
                                    </div>
                                    <div class="sect3_card_desc">
                                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sect3_card">
                                <div class="sect3_card_wh">
                                    <div class="sect3_card_top">
                                        <div class="sect3_icon_box">
                                            <img src={Photo.sect3_2} alt=""></img>
                                        </div>
                                        <p>Tablet</p>
                                    </div>
                                    <div class="sect3_card_desc">
                                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sect3_card">
                                <div class="sect3_card_wh">
                                    <div class="sect3_card_top">
                                        <div class="sect3_icon_box">
                                            <img src={Photo.sect3_3} alt=""></img>
                                        </div>
                                        <p>Smart TV</p>
                                    </div>
                                    <div class="sect3_card_desc">
                                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sect3_row">
                            <div class="sect3_card">
                                <div class="sect3_card_wh">
                                    <div class="sect3_card_top">
                                        <div class="sect3_icon_box">
                                            <img src={Photo.sect3_4} alt=""></img>
                                        </div>
                                        <p>Laptops</p>
                                    </div>
                                    <div class="sect3_card_desc">
                                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sect3_card">
                                <div class="sect3_card_wh">
                                    <div class="sect3_card_top">
                                        <div class="sect3_icon_box">
                                            <img src={Photo.sect3_5} alt=""></img>
                                        </div>
                                        <p>Gaming Consoles</p>
                                    </div>
                                    <div class="sect3_card_desc">
                                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sect3_card">
                                <div class="sect3_card_wh">
                                    <div class="sect3_card_top">
                                        <div class="sect3_icon_box">
                                            <img src={Photo.sect3_6} alt=""></img>
                                        </div>
                                        <p>VR Headsets</p>
                                    </div>
                                    <div class="sect3_card_desc">
                                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
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