import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
    return (
        <>
            <nav className="nav2 "
                style={{
                    position: "sticky",
                    top: "0",
                    left: "0"
                }}>
                <div className="logo">
                    <h1>Fashe<span>.</span></h1>
                </div>

                <div className="content">
                    <ul>
                        <Link className="black" to={"/"}><li>Home</li></Link>
                        <Link to={"/Shope"}> <li>Shop</li></Link>
                        <Link to={"/Blog"}><li>Blog</li></Link>
                        <Link to={"/About"}><li>About</li></Link>
                        <Link to={"/Contact"}><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="signup">
                    <ul>
                        <li className="Login"><Link to={"/LogIn"}><button
                            style={{
                                padding: "5px 15px"
                            }}>Sign In</button></Link></li>
                        <li className="cart"> <Link to={"/Cart"}><butnn className="bttnn" ><i className="fa-solid fa-cart-shopping"></i>
                        </butnn></Link></li>
                        <li className="togal"><button><i class="fa-solid fa-sliders"></i></button></li>
                    </ul>
                </div>

            </nav>












        </>
    );
}
export default Navbar2;