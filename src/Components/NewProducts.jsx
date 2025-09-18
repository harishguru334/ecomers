import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import axios from "axios";


function NewProducts() {
    let [Products, setProducts] = useState([])
    console.log("Data", Products)
    const { addItem, inCart } = useCart();

    useEffect(() => {
        async function getProducts() {
            const res = await axios.get("http://localhost:8000/product/get").then((res)=>{
                setProducts(res.data.message)
            })
           
           


        }
        getProducts()
    }, []);

    async function getId(_id) {
        const ProductsId = axios.post(`http://localhost:8000/deleteProduct/${_id}`).then((res) => {
            console.log("Respose", res);
        });
        console.log(ProductsId)
    }
    async function AddToCart(_id) {
        const Cart = axios.post(`http://localhost:8000/AddToCart/${_id}`).then((res)=>{
            console.log(res)
        })
    }

    return (
        <>
                  <div className="main2">
                {Products && Products.map((item) => {
                    return (
                        <>
                            <div className="Items">
                                <div className="img">
                                    <img
                                        style={{
                                            width: "185px",
                                            height:"185px",
                                             border: "1px solid",
                                            padding: "20px",
                                            backgroundColor: "white"
                                        }} 
                                        src={`data:image/;base64,${btoa(
                                            String.fromCharCode(
                                                ...new Uint8Array(item?.image?.data?.data || "")
                                            )
                                        )}`} />
                                </div>
                                <div className="Item">
                                    <p style={{
                                        marginTop:"0x",
                                        textAlign:"center"
                                    }} className="title">{item?.Title}</p>
                                    <p>category = {item?.catagory}</p>
                                    <p>Price =${item?.Rate}</p>

                                    <div key={item?.id} className="buttnn">
                                        {inCart(item?.id) ? (<button className="btnnn">Added</button>) :
                                            (<button className="btnn" onClick={() => AddToCart(item._id)}>Add To Cart</button>)}

                                        <button className="btnn">
                                            <Link to={`/More3?id=${item._id}`}>More Details</Link>
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </>
                    )
                })
                }
            </div> 


        </>
    )
}

export default NewProducts;