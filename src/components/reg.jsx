import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA

const Register = () => {
  const { id } = useParams(); 
  const [data, setData] = useState(null);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Store reCAPTCHA response


  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((json) => {
        const item = json.find((entry) => entry.id.toString() === id);
        if (item) {
          setData(item.title);
          setTime(item.time);
        } else {
          console.log("Item not found!");
        }
        setEvents(json.map(event => ({ id: event.id, title: event.title ,time : event.time})));
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [id]);

  
  

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    college: "",
    department: "",
    gender: "",
    teamname: "",
    yearOfStudy: "",
    Whatsapp: "",
    
  });
  
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeYaXIeefrswAkydtJOGErUjQmqv1IlgtLWlnxw9jE25Ai4IA/formResponse";

  const ENTRY_IDS = {
    name: "entry.106494674",
    dob: "entry.1310340600",
    email: "entry.853943380",
    mobile: "entry.1597655876",
    college: "entry.1728510713",
    department: "entry.1524423665",
    event: "entry.17750743",
    gender: "entry.978264053",
    teamname: "entry.1111133993",
    yearOfStudy: "entry.334496450",
    Whatsapp: "entry.1859094734",
    Additional:"entry.1139906897"
    
  };
  const handleCheckboxChange = (eventId) => {
    setSelectedEvents((prevSelected) =>
      prevSelected.includes(eventId)
        ? prevSelected.filter((id) => id !== eventId)
        : [...prevSelected, eventId]
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data) {
      alert("Event data is not available yet. Please wait...");
      return;
    }
    if (document.getElementById("bot_field").value !== "") {
      alert("Spam detected! Submission blocked.");
      return;
  }
  
    if (!recaptchaValue) {
      alert("Please verify the reCAPTCHA before submitting.");
      return;
    }

    const formDataToSend = new URLSearchParams();
    formDataToSend.append(ENTRY_IDS.name, formData.name);
    formDataToSend.append(ENTRY_IDS.dob, formData.dob);
    formDataToSend.append(ENTRY_IDS.email, formData.email);
    formDataToSend.append(ENTRY_IDS.mobile, formData.mobile);
    formDataToSend.append(ENTRY_IDS.college, formData.college);
    formDataToSend.append(ENTRY_IDS.department, formData.department);
    formDataToSend.append(ENTRY_IDS.event, data);
    formDataToSend.append(ENTRY_IDS.gender, formData.gender);
    formDataToSend.append(ENTRY_IDS.teamname, formData.teamname);
    formDataToSend.append(ENTRY_IDS.yearOfStudy, formData.yearOfStudy);
    formDataToSend.append(ENTRY_IDS.Whatsapp, formData.Whatsapp);
    formDataToSend.append(ENTRY_IDS.Additional, selectedEvents.join(", "));
    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataToSend,
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          dob: "",
          email: "",
          mobile: "",
          college: "",
          department: "",
          gender: "",
          teamname: "",
          yearOfStudy: "",
          Whatsapp: "",
          
        });
        setSelectedEvents([]);
        setRecaptchaValue(null); // Reset reCAPTCHA after submission
      })
      .catch((error) => console.error("Error:", error));
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border nav-bg" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="mt-2 ">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="title container py-3 d-flex justify-content-center">
        <strong>{data} </strong>
        
        
      </div>
      <div className="title container py-2 d-flex justify-content-center"><strong>Time : {time}</strong></div>
      <form onSubmit={handleSubmit} className="container form-container col-lg-12 col-md-12 col-sm-12 ">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Gender:</label>
        <select name="gender" className="rounded-2" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>College Name:</label>
        <input type="text" name="college" value={formData.college} onChange={handleChange} required />

        <label>Department:</label>
        <input type="text" name="department" value={formData.department} onChange={handleChange} required />

        <label>Year of Study:</label>
        <select name="yearOfStudy" className="rounded-2" value={formData.yearOfStudy} onChange={handleChange} required>
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        <label>Team Name:</label>
        <input type="text" name="teamname" value={formData.teamname} onChange={handleChange} required />


        <label>Mobile No:</label>
        <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} required />

        <label>WhatsApp No:</label>
        <input type="number" name="Whatsapp" value={formData.Whatsapp} onChange={handleChange} required />

        
        <label>Email ID:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <div className="d-flex justify-content-center ">
        <h5 className="py-4">Additional Events:</h5>
        </div>
        
        {events.map((event) => (
          event.title !== data && (
            <div className="container d-flex justify-content-between w-75 py-2">
            <label key={event.id} style={{display:"contents"}}>
              {event.title } <br /> {event.time}
              
              <input
                style={{width:"20%"}}
                type="checkbox"
                checked={selectedEvents.includes(event.title)}
                onChange={() => handleCheckboxChange(event.title)}
              />
            </label>
            
              </div>
          )
        ))}
        


        {/* Google reCAPTCHA Component */}
        <div className="d-flex justify-content-center my-3">
          <ReCAPTCHA
            sitekey="6Lf8xu4qAAAAADxhQX6qL_ld8kpn2uTrvatiW181" // Replace with your actual site key
            onChange={(value) => setRecaptchaValue(value)}
          />
        </div>
        <input type="text" name="bot_field" id="bot_field" style={{display:"none"}}/>

        <div className="d-flex justify-content-center">
        <button className="rounded w-100" type="submit">
          Submit
        </button>
        </div>
      </form>
    </>
  );
};

export default Register;
