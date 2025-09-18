import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function LogIn() {
    let navigate = useNavigate()


    let [Data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    console.log("Data", Data)
    // console.log(Data.username)

    function GetAllData(e) {
        setData({
            ...Data,
            [e.target.name]: e.target.value
        })


    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Funcin runnn");
        const sendata = await axios.post("http://localhost:8000/UseLogin", Data).then((res) => {
            if (Data && res.data?.message?.Username == Data.Username && res.data.message.Email == Data.Email && res.data.message.Password == Data.Password) {
                toast.success("User LogIn Succesfull");

                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/');
                }, 1500);

            } else {
                toast.error("User not Found");
            }

        });

    };


    return (

        <>
            <Toaster />
            <Navbar />
            <Navbar2 />
            <form action="" onSubmit={handleSubmit}

                style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#ccc",
                }}>

                <div className="log"
                    style={{
                        width: "30%",
                        textAlign: 'left',
                        border: "1px solid",
                        borderRadius: "10px",
                        backgroundColor: "White",
                        padding: "50px",
                        margin: "20px 0",

                        // padding:"15px",

                        paddingBottom: "100px"
                    }}>


                    <h2
                        style={{
                            marginLeft: "35px",
                            lineHeight: "0"
                        }}>Sign in </h2>
                    <Link to={"/SignUp"}>
                        <p
                            style={{
                                marginLeft: "35px",
                                lineHeight: "0",
                                fontSize: "10px",
                                marginTop: "15px"
                            }}>
                            or Create Acount
                        </p>
                    </Link>

                    <input type="Username/" name="Username" placeholder="Username" onChange={GetAllData}
                        style={{
                            marginLeft: "35px",
                            width: "220px",
                            marginTop: "20px"
                        }} /> <br />
                    <input type="Email/" name="Email" placeholder="Email" onChange={GetAllData}
                        style={{
                            marginLeft: "35px",
                            width: "220px",
                            marginTop: "20px"
                        }} /> <br />

                    <input type="Password" name="Password" placeholder="Password" onChange={GetAllData}
                        style={{
                            marginLeft: "35px",
                            width: "220px"
                        }} /> <br />

                    <button type="submit"
                        style={{
                            padding: "8px 102px",
                            marginLeft: "31px",
                            backgroundColor: "#097ce7",
                            border: "none"
                        }}>
                        Sign In
                    </button> <br />
                    <div className="chackbox ">
                        <input type="checkbox" id="rememberMe"
                            style={{
                                marginLeft: "35px",
                                marginTop: "20px",
                                marginRight: "5px"
                            }} /><span
                            >remember Me</span>
                    </div>
                    <Link to={"https://myaccount.google.com/"}> <button
                        style={{
                            marginLeft: "35px",
                            marginTop: "30px",
                            padding: "8px 32px"
                        }}><i className="fa-brands fa-google"></i><span
                            style={{
                                marginLeft: "5px",
                                padding: "5px 21px"
                            }}>sign in With Google</span></button></Link>

                </div>

            </form>
        </>
    );
};


export default LogIn;
