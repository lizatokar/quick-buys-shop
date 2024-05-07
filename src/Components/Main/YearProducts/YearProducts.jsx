import "./YearProducts.css";
import {useNavigate} from "react-router-dom";

const YearProducts = (props) => {
    const navigate = useNavigate();

    const BuyHandler = () => {
        navigate(`/product/${props.product.id}`);
    };

    return (
        <div className="yearProducts">
            <img src={props.product.image} alt={props.product.title}/>
            <button onClick={BuyHandler} className="buyButton">
                BUY
            </button>
        </div>
    );
};

export default YearProducts;
