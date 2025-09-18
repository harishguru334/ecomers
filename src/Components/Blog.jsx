import { Link } from 'react-router-dom';
import Image1 from './image/single_blog_1.png.webp';
import Image2 from './image/single_blog_2.png.webp';
import Image3 from './image/single_blog_3.png.webp';
import Image4 from './image/single_blog_4.png.webp';
import Image5 from './image/single_blog_5.png.webp';
import Post1 from './image/post_1.png.webp';
import Post2 from './image/post_2.png.webp';
import Post3 from './image/post_3.png.webp';
import Post4 from './image/post_4.png.webp';
import post5 from './image/post_5.png.webp';
import post6 from './image/post_6.png.webp';
import post7 from './image/post_7.png.webp';
import post8 from './image/post_8.png.webp';
import post9 from './image/post_9.png.webp';
import post10 from './image/post_10.png.webp';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';




function Blog() {
    return (
        <>
            <div>
                <div className="Blog-Main">
                    <Navbar />
                    <Navbar2 />

                    <div className="Blog">
                        <h1>Blog <span>.</span></h1>
                    </div>
                    <div className="Blog1">
                        <div className="img">
                            <div className="img1">
                                <img src={Image1} alt="" />
                                <h1> 15 <br />Jan </h1>
                                <h2> <Link className='h2'>Google inks pact for new 35-storey office</Link></h2>
                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <div className="cmt">
                                    <li><i class="fa-solid fa-user"></i><Link className='Link'>Travel.Lifestyle</Link> </li>
                                    <li>|</li>
                                    <li><i class="fa-solid fa-comments"></i> <Link className='Link'>03 comments</Link></li>
                                </div>

                            </div>
                            <div className="img2">
                                <img src={Image2} alt="" />
                                <h1> 15 <br />Jan </h1>
                                <h2> <Link className='h2'>Google inks pact for new 35-storey office</Link></h2>
                                <pre>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it <br />
                                    first without heaven in place seed it second morning saying.</pre>
                                <div className="cmt">
                                    <li><i class="fa-solid fa-user"></i><Link className='Link'>Travel.Lifestyle</Link> </li>
                                    <li>|</li>
                                    <li><i class="fa-solid fa-comments"></i> <Link className='Link'>03 comments</Link></li>
                                </div>
                            </div>
                            <div className="img2">
                                <img src={Image3} alt="" />
                                <h1> 15 <br />Jan </h1>
                                <h2> <Link className='h2'>Google inks pact for new 35-storey office</Link></h2>
                                <pre>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it <br />
                                    first without heaven in place seed it second morning saying.</pre>
                                <div className="cmt">
                                    <li><i class="fa-solid fa-user"></i><Link className='Link'>Travel.Lifestyle</Link> </li>
                                    <li>|</li>
                                    <li><i class="fa-solid fa-comments"></i> <Link className='Link'>03 comments</Link></li>
                                </div>
                            </div>
                            <div className="img2">
                                <img src={Image4} alt="" />
                                <h1> 15 <br />Jan </h1>
                                <h2> <Link className='h2'>Google inks pact for new 35-storey office</Link></h2>
                                <pre>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it <br />
                                    first without heaven in place seed it second morning saying.</pre>
                                <div className="cmt">
                                    <li><i class="fa-solid fa-user"></i><Link className='Link'>Travel.Lifestyle</Link> </li>
                                    <li>|</li>
                                    <li><i class="fa-solid fa-comments"></i> <Link className='Link'>03 comments</Link></li>
                                </div>
                            </div>
                            <div className="img2">
                                <img src={Image5} alt="" />
                                <h1> 15 <br />Jan </h1>
                                <h2> <Link className='h2'>Google inks pact for new 35-storey office</Link></h2>
                                <pre>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it <br />
                                    first without heaven in place seed it second morning saying.</pre>
                                <div className="cmt">
                                    <li><i class="fa-solid fa-user"></i><Link className='Link'>Travel.Lifestyle</Link> </li>
                                    <li>|</li>
                                    <li><i class="fa-solid fa-comments"></i> <Link className='Link'>03 comments</Link></li>
                                </div>
                            </div>


                        </div>
                        <div className="Details">
                            <div className="Contect">
                                <li><input className='input' type="text" placeholder='Search Keyword' /></li>
                                <li className='Search'><i class="fa-solid fa-magnifying-glass"></i></li>
                                <button className='search-butten' type='submit'> SEARCH</button>
                            </div>
                            <div className="catagry">
                                <ul>
                                    <p className="bold">Category</p>
                                    <li><Link to={"/Blog"}>Resaurant food(37)</Link></li>
                                    <li><Link to={"/Blog"}>Travel news(10)</Link></li>
                                    <li><Link to={"/Blog"}>Modern technology(03)</Link></li>
                                    <li><Link to={"/Blog"}>Product(11)</Link></li>
                                    <li><Link to={"/Blog"}>Inspiration(21)</Link></li>
                                    <li><Link to={"/Blog"}>Health Care (21)09</Link></li>
                                </ul>
                            </div>
                            <div className="Recent ">
                                <h3>Recent Post</h3>
                                <div className="updates">
                                    <div className="update1">
                                        <img src={Post1} alt="" height={'20px'} width={'20px'} />
                                        <img src={Post2} alt="" />
                                        <img src={Post3} alt="" />
                                        <img src={Post4} alt="" />
                                    </div>
                                    <div className="update2">
                                        <Link to={',/Blog'}><h4 className='line1'>From life was you fish...</h4> </Link>
                                        <p>January 12, 2019</p>
                                        <Link to={',/Blog'}><h4 className='line2'>.update2 .line1</h4></Link>

                                        <p>02 Hours ago</p>
                                        <Link to={',/Blog'}><h4 className='line3'>Astronomy Or Astrology</h4></Link>
                                        <p>03 Hours ago</p>
                                        <Link to={',/Blog'}><h4 className='line4'>Asteroids telescope</h4></Link>

                                        <p>01 Hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Cloud">
                                <h3>Tag Clouds</h3>
                                <div className="Cloud1">
                                    <button>project</button>
                                    <button>Love</button>
                                    <button>technology</button>
                                    <button>travel</button>
                                    <button>restaurant</button>
                                    <button>life style</button>
                                    <button>design</button>
                                    <button>illustration</button>

                                </div>
                            </div>
                            <div className='instagram'>
                                <h3>Instagram Feeds</h3>
                                <div className="insta">
                                    <img src={post5} alt="" />
                                    <img src={post6} alt="" />
                                    <img src={post7} alt="" />
                                    <img src={post8} alt="" />
                                    <img src={post9} alt="" />
                                    <img src={post10} alt="" />
                                </div>
                            </div>
                            <div className="Newsletter">
                                <h3>Newsletter</h3>
                                <div className="news">
                                    <input style={{
                                        width: "210px"
                                    }} className='input' type="text" placeholder='Enter email' />
                                    <button className='search-butten' type='Submit'>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
               <Footer />
            </div>



        </>
    )
}
export default Blog;