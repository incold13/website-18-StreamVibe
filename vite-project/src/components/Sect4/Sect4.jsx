import {Photo} from "../../photo.js";
import "../Sect4/Sect4.scss"
export default function Sect4() {
    return(
        <>
            <section class="sect4">
                <div class="sect4_all">
                    <div class="sect4_header">
                        <div class="sect4_header_left">
                            <div class="sect4_title">
                                <p>Frequently Asked Questions</p>
                            </div>
                            <div class="sect4_desc">
                                <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                            </div>
                        </div>
                        <div class="sect4_btn">
                            <p>Ask a Question</p>
                        </div>
                    </div>
                    <div class="sect4_content">
                        <div class="sect4_col">
                            <div class="sect4_item_open">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>01</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">What is StreamVibe?</p>
                                        <p class="sect4_item_desc">StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_minus} alt=""></img>
                                    </div>
                                </div>
                                <div class="sect4_line"></div>
                            </div>
                            <div class="sect4_item">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>02</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">How much does StreamVibe cost?</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_plus} alt=""></img>
                                    </div>
                                </div>
                                <div class="sect4_line"></div>
                            </div>
                            <div class="sect4_item">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>03</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">What content is available on StreamVibe?</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_plus} alt=""></img>
                                    </div>
                                </div>
                                <div class="sect4_line"></div>
                            </div>
                            <div class="sect4_item">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>04</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">How can I watch StreamVibe?</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_plus} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sect4_col">
                            <div class="sect4_item">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>05</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">How do I sign up for StreamVibe?</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_plus} alt=""></img>
                                    </div>
                                </div>
                                <div class="sect4_line"></div>
                            </div>
                            <div class="sect4_item">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>06</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">What is the StreamVibe free trial?</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_plus} alt=""></img>
                                    </div>
                                </div>
                                <div class="sect4_line"></div>
                            </div>
                            <div class="sect4_item">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>07</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">How do I contact StreamVibe customer support?</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_plus} alt=""></img>
                                    </div>
                                </div>
                                <div class="sect4_line"></div>
                            </div>
                            <div class="sect4_item">
                                <div class="sect4_item_top">
                                    <div class="sect4_num">
                                        <p>08</p>
                                    </div>
                                    <div class="sect4_item_text">
                                        <p class="sect4_item_title">What are the StreamVibe payment methods?</p>
                                    </div>
                                    <div class="sect4_icon">
                                        <img src={Photo.sect4_plus} alt=""></img>
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