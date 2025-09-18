import Img1 from './image/about_us_video.png.webp';
import { Form, Link } from 'react-router-dom';
import icon1 from './image/feature_icon_1.svg';
import icon2 from './image/feature_icon_2.svg';
import icon3 from './image/feature_icon_3.svg';
import Slide2 from './Slide2';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';






function About() {
    return (
        <>
            <div className="About-Main">
                <Navbar />
                <Navbar2 />

                <div className="Blog">
                    <h1>About</h1>
                </div>
                <div className="About-Cntnt">
                    <h3>Our Mission</h3>
                    <h2>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat  ultrices nec sed neque.</h2>
                    <div className="img"> <img src={Img1} alt="" width={'100%'} />
                        <Link to={'https://youtu.be/DWHB6nTyKDI?si=vXf8jHidj-lDj0h9'}><i class="fa-solid fa-play"></i></Link>
                    </div>
                </div>
                <div className="cntnt-main">
                    <div className="cntnt1">
                        <h1>Credibly innovate granular internal or organic sources whereas standards.</h1>
                    </div>
                    <div className="cntnt-2">
                        <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
                    </div>
                </div>
                <div className="box-main">
                    <div className="box-1">
                        <img src={icon1} alt="" />
                        <p>Credit Card Support</p>
                    </div>
                    <div className="box-1">
                        <img src={icon2} alt="" />
                        <p>Online order</p>
                    </div>
                    <div className="box-1">
                        <img src={icon3} alt="" />
                        <p>Free delivery</p>
                    </div>
                    <div className="box-1">
                        <img src={icon1} alt="" />
                        <p>Product with Gift</p>
                    </div>
                </div>
                <Slide2 />
                <div className="Update">
                    <div className="Update2">
                        <h1>Get promotions & updates!</h1>
                        <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                        <input type="Email" placeholder='Enter your mail' />
                        <button className='subscribe'>
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    );
};
export default About;