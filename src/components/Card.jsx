import { Link } from "react-router-dom";

const Card = ({ title, description, image,id ,fileUrl}) => {
    return (
      <div className="card my-3 "  style={{ width: "100%",border:"none" ,backgroundColor :"#F4F4F4"}}>
        <img 
          className="card-img-top rounded-top-4" 
          src={image} 
          alt={"image"} 
          style={{ height: "200px", objectFit: "cover" }} 
          loading="lazy"
        />
        <div className="card-body nav-bg text-white rounded-bottom-4">
          <h5 className="card-title ">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between">
          <Link to={`/reg/${id}`} className="btn btn-primary">Register</Link>
          <a href={fileUrl} download className="btn btn-success">Rule Book</a>
        </div>

        </div>
      </div>
    );
  };
  
  export default Card;
  