import { useState, useEffect } from "react";


const Timer = () => {
    
      const [currentTime, setCurrentTime] = useState(new Date());
    
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000); // Update time every second
        return () => clearInterval(timer);
      }, []);
    return ( 
        <>

      {/* Date and Time Section */}
      <section className="bg-white pb-2 ">
      <div className="container ">
        <div className="date-time-container d-flex justify-content-between  ">
          <img src="src\assets\logo2.png" alt="logo" width={100} />
          <div>
            <p className="current-time pt-3">{currentTime.toLocaleString()}</p>
            <p className="last-date">
              TILL :<strong>13th March</strong>
            </p>
          </div>
          <img src="src\assets\logo1.png" alt="logo" width={70} />
        </div>
      </div>
      </section>
    </>
     );
}
 
export default Timer;