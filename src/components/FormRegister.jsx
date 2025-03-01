import { Helmet } from "react-helmet-async";
import Register from "./reg";
const FormRegister = () => {
    return ( 
        <>
            <Helmet>
                <title>Register | AMJ Event</title>
                <meta name="description" content="A.M Jain College's Computer Science Department Event" />
                <meta name="keywords" content="Agurchand Manmull Jain College,hackathon,amj event,A.M jain event ,coding,hackathon amjain, AMJ Event, programming, events, tech" />
            </Helmet>
            <Register/>
        
        </>
     );
}
 
export default FormRegister;