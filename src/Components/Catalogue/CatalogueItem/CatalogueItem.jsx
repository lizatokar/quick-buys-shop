import "./CatalogueItem.css";
import {useNavigate} from "react-router-dom";

const CatalogueItem = (props) => {
    const navigate = useNavigate();

    const ShowMoreHandler = () => {
        navigate(`/product/${props.product.id}`);
    };

    return (
        <div className="catalogueItem">
            <div className="imageContainer">
                <img src={props.product.image} alt={props.product.title}/>
            </div>
            <h2 className="title">{props.product.title}</h2>
            <h3>Price: {props.product.price}$</h3>
            <h3>Category: {props.product.category}</h3>
            <button onClick={ShowMoreHandler} className="showMoreButton">
                Show More
            </button>
        </div>
    );
};

export default CatalogueItem;
