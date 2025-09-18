import { Link } from "react-router-dom";
function Footer() {
    return(
        <>
         <div className="list">
                    <div className="list1">
                        <ul>
                            <h2>Estore</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                        </ul>
                    </div>
                    <div className="list1">
                        <ul>
                            <h2>Quick Links</h2>
                            <Link> <li>About</li></Link>
                            <Link><li>Offers & Discounts</li></Link>
                            <Link><li>Get Coupon</li></Link>
                            <Link><li>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="list1">
                        <ul>
                            <h2>New Products</h2>
                            <Link> <li>Woman Cloth</li></Link>
                            <Link><li>Fashion Accessories</li></Link>
                            <Link><li>Man Accessories</li></Link>
                            <Link><li>Rubber made Toys</li></Link>
                        </ul>
                    </div>
                    <div className="list1">
                        <ul>
                            <h2>Support</h2>
                            <Link><li>Frequently Asked Questions</li></Link>
                            <Link><li>Terms & Conditions</li></Link>
                            <Link><li>Privacy Policy</li></Link>
                            <Link><li>Privacy Policy</li></Link>
                            <Link><li>Report a Payment Issue</li></Link>
                        </ul>
                    </div>
                </div>
        </>
    )
}
export default Footer;