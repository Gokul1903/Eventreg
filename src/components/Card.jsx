import { Link } from "react-router-dom";

const Card = ({ title, description, image,id }) => {
    return (
      <div className="card my-3 "  style={{ width: "100%",border:"none" ,backgroundColor :"#F4F4F4"}}>
        <img 
          className="card-img-top rounded-top-4" 
          src={image} 
          alt="Card image cap" 
          style={{ height: "200px", objectFit: "cover" }} 
        />
        <div className="card-body nav-bg text-white rounded-bottom-4">
          <h5 className="card-title ">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={`/reg/${id}`} className="btn btn-primary">Register</Link>
        </div>
      </div>
    );
  };
  
  export default Card;
  