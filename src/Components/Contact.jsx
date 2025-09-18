import image1 from "./image/gallery1.jpg.webp";
import image2 from "./image/gallery2.jpg.webp";
import image3 from "./image/gallery3.jpg.webp";
import image4 from "./image/gallery4.jpg.webp";
import image5 from "./image/gallery5.jpg.webp";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function Contact() {
    return (
        <>

            <div className="Contact-Main">
                <Navbar />
                <Navbar2 />
                <div className="Blog">
                    <h1>Contact Us </h1>
                </div>

                <div className="Contact-1">
                    <div className="Contact-2">
                        <p><i class="fa-solid fa-exclamation"></i></p>
                        <h3>Oops! Something went wrong.</h3>
                        <pre>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</pre>
                    </div>
                </div>
                <div className="feedback">
                    <div className="feedback1">
                        <h2>Get in Touch</h2>
                        <input className="input1" type="text" placeholder="Enter Message" />
                        <div className="info">
                            <input className="info1" type="text" placeholder="Enter your name " />
                            <input className="info1" type="text" placeholder="Email" />
                        </div>
                        <input type="text" className="info2" placeholder="Enter Suject" />
                        <button className="Send" type="submit">SEND</button>
                    </div>
                    <div className="feedback-1">
                        <div className="feedback2">
                            <div className="home1">
                                <li> <i class="fa-solid fa-house"></i> </li>
                            </div>
                            <div className="home2">
                                <li>Buttonwood, California.</li>
                                <li>Rosemead, CA 91770</li>
                            </div>
                        </div>
                        <div className="feedback2">
                            <div className="home1">
                                <li> <i class="fa-solid fa-mobile-screen-button"></i> </li>
                            </div>
                            <div className="home2">
                                <li>+1 253 565 2365</li>
                                <li>Mon to Fri 9am to 6pm</li>
                            </div>
                        </div>
                        <div className="feedback2">
                            <div className="home1">
                                <li> <i class="fa-solid fa-envelope"></i> </li>
                            </div>
                            <div className="home2">
                                <li>support@colorlib.com</li>
                                <li>Send us your query <br /> anytime!</li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="insta">
                    <div className="imgs">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                        <img src={image5} alt="" />
                    </div>

                </div>
            </div>
            <div className="Footer">
                <Footer />
            </div>

        </>
    )
}
export default Contact;