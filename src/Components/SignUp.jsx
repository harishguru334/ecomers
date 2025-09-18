import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";



function SignUp() {
  let [loadng, setLoading] = useState(false)
  let [Data, setData] = useState("")
  console.log("Data", Data)


  function GetAllData(e) {
    setData({
      ...Data,
      [e.target.name]: e.target.value
    })

  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    const sendata = await axios.post("http://localhost:8000/CreateUser", Data).then((res) => {
      if (res.data.status === true) {
        setTimeout(() => {
          toast.success("User Create Succesfully");
          setLoading(false)
        }, 3000);
      } else {
        toast.error("something went wrong");
        setLoading(false)
      }
    });
  }

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
            paddingBottom: "100px"
          }}>


          <h2
            style={{
              marginLeft: "35px",
              lineHeight: "0"
            }}>Sign Up </h2>

          <input type="Name" name="Name" placeholder="Name" onChange={GetAllData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />

          <input type="Username" name="Username" placeholder="Username" onChange={GetAllData}
            style={{
              marginLeft: "35px",
              width: "220px",
              marginTop: "20px"
            }} /> <br />

          <input type="Email" name="Email" placeholder="Email" onChange={GetAllData}
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


          {loadng ? <button type="submit" disabled
            style={{
              padding: "8px 97px",
              marginLeft: "35px",
              backgroundColor: "#097ce7"
            }}>
            Loading
          </button> : <button type="submit"
            style={{
              padding: "8px 97px",
              marginLeft: "35px",
              backgroundColor: "#097ce7"
            }}>
            siGnup
          </button>}

          <br />
          <div className="chackbox ">
            <input type="checkbox" id="rememberMe"
              style={{
                marginLeft: "35px",
                marginRight: "5px",
                marginTop: '15px'
              }} /><span
                style={{
                  marginTop: '0'
                }}
              >remember Me</span>
          </div>
          <Link to={"https://myaccount.google.com/"}> <button
            style={{
              marginLeft: "35px",
              marginTop: "30px",
              padding: "8px 53px",
            }}>
            <i className="fa-brands fa-google"></i><span
              style={{
                marginLeft: "5px"
              }}>signUp With Google </span>
          </button></Link>

        </div>

      </form>
    </>
  );

}
export default SignUp;