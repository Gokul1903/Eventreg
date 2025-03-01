import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const [text, setText] = useState("");
    const fullText = "HACKATHON '25";
  

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
        if (index < fullText.length) {
            setText(fullText.slice(0, index + 1));
            index++;
        } else {
            clearInterval(interval);
        }
        }, 200);
        return () => clearInterval(interval);
    }, []);
    return ( 
        <>
        <section className="bg-white  ">
            <div className="container d-flex justify-content-center">
                <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">

                <img className="w-100 py-3" src="/AGURCHAND-MANMULL-JAIN-COLLEGE.png" loading="lazy" />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                <h1 className=" hackathon-text d-flex justify-content-center " to="/">
                {text}
                </h1>
                </div>
            </div>
            
        </section>
        </>
     );
}
 
export default Banner;