import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import NewProducts from "./NewProducts";
// import images from './image/hero_man.png.webp';


function Frontpage() {
    let [Products, setProducts] = useState([]);
    let [filterData, setFilterData] = useState([]);
    const { addItem, inCart } = useCart();


    async function getProducts() {
        const data = await fetch("https://dummyjson.com/products");
        const jsondata = await data.json();
        console.log(jsondata)
        setProducts(jsondata.products);
        setFilterData(jsondata.products)
    }
    const filterItem = (category) => {
        const filterDD = Products.filter((item) => item.category == category)
        setFilterData(filterDD)
        console.log(filterItem)
    }
    useEffect(() => { 
        getProducts()
    }, [])
    return (
        <>
       
            <div className="main">
               
                <h1 className="head">Shop by Category</h1>

                <div className="category">
                    <button className="btttn" onClick={() => filterItem("getProducts")}>All </button>
                    <button className="btttn" onClick={() => filterItem("beauty")}> Beauty</button>
                    <button className="btttn" onClick={() => filterItem("fragrances")}> fragrances</button>
                    <button className="btttn" onClick={() => filterItem("furniture")}>furniture</button>
                    <button className="btttn" onClick={() => filterItem("groceries")}> groceries</button>
                </div>

                <div className="main2">
                    {filterData?.map((item) => {
                        return (
                            <>
                                <div className="Items">
                                    <div className="img">
                                        <img
                                            style={{
                                                width: "185px",
                                                border: "1px solid",
                                                padding: "20px",
                                                backgroundColor: "white"
                                            }}
                                            src={item?.images} alt="" />
                                    </div>
                                    <div className="Item">
                                        <p className="title">{item?.title}</p>
                                        <p>category = {item?.category}</p>
                                        <p>Price =${item?.price}</p>

                                        <div key={item?.id} className="buttnn">
                                            {inCart(item?.id) ? (<button className="btnnn">Added</button>) :
                                                (<button className="btnn" onClick={() => addItem(item)}>Add To Cart</button>)}

                                            <button className="btnn">
                                                <Link to={`/more?id=${item?.id}`}>More Details</Link>
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    );
};
export default Frontpage;