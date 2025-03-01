import Banner from "./banner";
import CardList from "./CardList";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return ( 
        <>
        <Helmet>
            <title>Home | AMJ Event</title>
            <meta name="description" content="A.M Jain College's Computer Science Department Event" />
            <meta name="keywords" content="Agurchand Manmull Jain College,hackathon,amj event,A.M jain event ,coding,hackathon amjain, AMJ Event, programming, events, tech" />
        </Helmet>

        <div>
        <Banner/>
        <CardList/>
        </div>
        </>

     );
}
 
export default Home;