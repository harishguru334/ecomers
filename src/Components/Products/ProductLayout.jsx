import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"
import NewProducts from "../NewProducts"
import Navbar from "../Navbar"
import Navbar2 from "../Navbar2"

function ProductLayout(props) {
    console.log(props)

    let [AllData, setData] = useState(props.data)
    console.log(AllData)
    const { inCart, addItem } = useCart()
    return (
        <>
            <div>
            <Navbar />
            <Navbar2 />
                <h1 className="head">Mobile Phones</h1>
                <div className="main2">
                    {AllData && AllData.map((item) => {
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
                                            src={item.images} alt="" />
                                    </div>
                                    <div className="Item">
                                        <p>{item.title}</p>
                                        <p>${item.price}</p>
                                        <div key={item.id} className="buttnn">
                                            {inCart(item.id) ? (<button className="btnnn">Added</button>) :
                                                <button className="btnn" onClick={() => addItem(item)}>Add To Cart</button>}

                                            <button className="btnn">
                                                <Link to={`/More2?id=${item.id}`}> More Details </Link>
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
            <NewProducts />
        </>
    )
}
export default ProductLayout;