import { useState } from "react";
import slider1 from "./image/second-2 .jpg";
import slider2 from "./image/first-1.jpg";

function Slide() {
    let imagesData = [
        {
            id: 1,
            image: slider1,
            text1: "Fashion sale",
            text2: "Minimal ladiez Style",
            text3: "Consectetur adipisicing elit.Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum."
        },
        {
            id: 2,
            image: slider2,
            text1: "Fashion sale",
            text2: "Minimal Menz Style",
            text3: "Consectetur adipisicing elit.Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum."
        },

    ];

    let [Data, setData] = useState(0);

    function Leftslide() {

        if (Data > 0) {
            setData(Data - 1);
        }
        if (Data == 0) {
            setData(1)
        }
    }
    function Righslide() {

        if (Data < 1) {
            setData(Data + 1);
        }
        if (Data == 1) {
            setData(0)
        }
    }

    return (<>
        <div className="Slider">
            {imagesData && imagesData.map((item, i) => {
                return (<>
                    <div className={`${i == Data ? "active" : "none"}`}>
                        <div className="containt">
                            <img src={item.image} alt="" width={"100%"} height={"500px"}/>
                            <div className={`${i == 1 ?"cntnt":"cntnt2" } `}>
                                <h2 className="style">{item.text1}</h2>
                                <h2 className="style1">{item.text2}</h2>
                                <p>{item.text3}</p>
                            </div>
                            {/* <p>{item.text}</p> */}

                            <button className="Left" onClick={Leftslide}><i class="fa-solid fa-less-than"></i></button>
                            <button className="Right" onClick={Righslide}><i class="fa-solid fa-greater-than"></i></button>

                        </div>
                    </div>
                </>)

            })
            }
        </div>
    </>)
}
export default Slide;