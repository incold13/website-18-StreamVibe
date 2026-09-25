import {Photo} from "../../photo.js";
import "../Footer/Footer.scss"
export default function Footer() {
    return(
        <>
            <footer class="footer">
                <div class="footer_all">
                    <div class="footer_top">
                        <div class="footer_col">
                            <div class="footer_col_title">
                                <p>Home</p>
                            </div>
                            <div class="footer_col_links">
                                <p>Categories</p>
                                <p>Devices</p>
                                <p>Pricing</p>
                                <p>FAQ</p>
                            </div>
                        </div>
                        <div class="footer_col">
                            <div class="footer_col_title">
                                <p>Movies</p>
                            </div>
                            <div class="footer_col_links">
                                <p>Gernes</p>
                                <p>Trending</p>
                                <p>New Release</p>
                                <p>Popular</p>
                            </div>
                        </div>
                        <div class="footer_col">
                            <div class="footer_col_title">
                                <p>Shows</p>
                            </div>
                            <div class="footer_col_links">
                                <p>Gernes</p>
                                <p>Trending</p>
                                <p>New Release</p>
                                <p>Popular</p>
                            </div>
                        </div>
                        <div class="footer_col">
                            <div class="footer_col_title">
                                <p>Support</p>
                            </div>
                            <div class="footer_col_links">
                                <p>Contact Us</p>
                            </div>
                        </div>
                        <div class="footer_col">
                            <div class="footer_col_title">
                                <p>Subscription</p>
                            </div>
                            <div class="footer_col_links">
                                <p>Plans</p>
                                <p>Features</p>
                            </div>
                        </div>
                        <div class="footer_col">
                            <div class="footer_col_title">
                                <p>Connect With Us</p>
                            </div>
                            <div class="footer_socials">
                                <div class="footer_social_btn">
                                    <img src={Photo.footer_1} alt=""></img>
                                </div>
                                <div class="footer_social_btn">
                                    <img src={Photo.footer_2} alt=""></img>
                                </div>
                                <div class="footer_social_btn">
                                    <img src={Photo.footer_3} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_hr"></div>
                    <div class="footer_bottom">
                        <div class="footer_copy">
                            <p>@2023 streamvib, All Rights Reserved</p>
                        </div>
                        <div class="footer_legal">
                            <p>Terms of Use</p>
                            <div class="footer_pipe"></div>
                            <p>Privacy Policy</p>
                            <div class="footer_pipe"></div>
                            <p>Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}